<template>
  <div class="background">
    <navbar class="navbar" style="z-index: 4;" />
    <Dropupbttn class="dropupbttn" style="z-index: 4; top: 88.5%; position: fixed;" />
    <home class="dropupbttn" style="z-index: 5; position: fixed;" />
    <menubttn style="z-index: 6; top: 0%;" /> 
    <navbar2 class="navbar2" style="z-index: 50;" />

    <div class="hof-container">
      
      <header class="hof-header">
        <div class="header-left">
          <p class="hof-label">⚔ HALL OF FAME</p>
        </div>
        
        <div class="header-center">
          <h1 class="hof-title">TOP SALES</h1>
        </div>
        
        <div class="header-right">
          <span class="top-label">SHOW</span>
          <div class="limit-tabs">
            <button
              v-for="n in [20, 50, 100]"
              :key="n"
              :class="['limit-btn', { active: displayLimit === n }]"
              @click="displayLimit = n"
            >{{ n }}</button>
          </div>
        </div>
      </header>

      <div v-if="isLoading" class="loader-wrap">
        <div class="hof-spinner"></div>
        <p class="loading-txt">Fetching top sales...</p>
      </div>

      <div v-else-if="hasError" class="empty-wrap">
        <p>There was a problem connecting to the OpenSea network. Please try again later.</p>
        <button class="limit-btn active" style="margin-top: 15px; border: 1px solid #111;" @click="fetchSales">TRY AGAIN</button>
      </div>

      <div v-else-if="topSales.length === 0 && !hasError" class="empty-wrap">
        <p>No ETH sales found for this collection yet.</p>
      </div>

      <div v-else class="fade-in">
        
        <section class="podium-section">
          <PodiumCard v-if="topSales[0]" :sale="topSales[0]" :rank="1" class="podium-1" />
          <PodiumCard v-if="topSales[1]" :sale="topSales[1]" :rank="2" class="podium-2" />
          <PodiumCard v-if="topSales[2]" :sale="topSales[2]" :rank="3" class="podium-3" />
        </section>

        <div class="stats-bar">
          <div class="stat-item">
            <span class="stat-lbl">TOTAL ANALYZED</span>
            <span class="stat-val">{{ summaryStats.total }}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-lbl">HIGHEST SALE</span>
            <span class="stat-val gold-text">Ξ {{ summaryStats.highest }}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-lbl">LAST UPDATE</span>
            <span class="stat-val">{{ summaryStats.lastUpdate }}</span>
          </div>
        </div>

        <section class="list-section" v-if="restSales.length > 0" ref="listSectionRef">
          <div class="list-header" :class="{ 'animate-fade-in': showListAnimation }">
            <span>RANK</span>
            <span> </span>
            <span>ID / NAME</span>
            <span>PRICE</span>
            <span>DATE</span>
            <span>SELLER → BUYER</span>
            <span></span>
          </div>
          
          <ListRow 
            v-for="(sale, idx) in restSales" 
            :key="sale.event_id" 
            :sale="sale" 
            :rank="idx + 4" 
            class="list-item-row" 
            :class="{ 'animate-slide-up': showListAnimation }"
            :style="showListAnimation ? { animationDelay: `${idx * 0.03}s` } : {}"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useLoading } from '@/composables/useLoading';
import { useAssetLoading } from '@/composables/useAssetLoading';
import PodiumCard from '../components/PodiumCard.vue';
import ListRow from '../components/ListRow.vue';

// ---- Types ----
export interface SaleEvent {
  event_id: string;
  identifier: string;
  name: string;
  image_url: string;
  priceEth: string;
  priceWei: bigint;
  currency: string;
  seller: string;
  buyer: string;
  event_timestamp: number;
  opensea_url: string;
}

// ---- State ----
const isLoading = ref(true);
const hasError = ref(false);
const allSales = ref<SaleEvent[]>([]);
const displayLimit = ref(20);

// ---- Configuración de Caché ----
const CACHE_KEY = 'tatsu_hof_sales';
const CACHE_TTL = 1000 * 60 * 60; // 1 hora de caché

// ---- Computed ----
const topSales = computed(() => allSales.value.slice(0, displayLimit.value));
const restSales = computed(() => topSales.value.slice(3));

// Nuevas Estadísticas para la barra resumen
const summaryStats = computed(() => {
  if (allSales.value.length === 0) return { total: 0, highest: 0, lastUpdate: '-' };
  
  // Buscar el timestamp más reciente
  const timestamps = allSales.value.map(s => s.event_timestamp);
  const maxTs = Math.max(...timestamps);
  const dateObj = new Date(maxTs < 1e11 ? maxTs * 1000 : maxTs);
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return {
    total: allSales.value.length,
    highest: allSales.value[0].priceEth,
    lastUpdate: formattedDate
  };
});

// ---- Animación Scroll ----
const listSectionRef = ref<HTMLElement | null>(null);
const showListAnimation = ref(false);

watch(listSectionRef, (el) => {
  if (el) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        showListAnimation.value = true;
        observer.disconnect();
      }
    }, { threshold: 0.05 });
    observer.observe(el);
  }
});

const weiToEth = (wei: string): string => {
  try {
    const val = Number(BigInt(wei)) / 1e18;
    return val.toFixed(2);
  } catch {
    return '?';
  }
};

// ---- Fetch ----
const fetchSales = async () => {
  isLoading.value = true;
  hasError.value = false;
  
  try {
    const cachedData = sessionStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { timestamp, sales } = JSON.parse(cachedData);
      const isCacheValid = (Date.now() - timestamp) < CACHE_TTL;

      if (isCacheValid) {
        allSales.value = sales.map((s: any) => ({
          ...s,
          priceWei: BigInt(s.priceWei)
        }));
        return;
      }
    }

    const slug = 'tatsuofficial';
    const lastSaleByNFT = new Map<string, any>();
    let cursor = '';
    let page = 0;
    const maxPages = 100;
    let stablePages = 0;
    let lastSize = 0;

    while (page < maxPages) {
      let url = `https://api.opensea.io/api/v2/events/collection/${slug}?event_type=sale&limit=50`;
      if (cursor) url += `&next=${cursor}`;

      const res = await fetch(url, {
        headers: {
          'X-API-KEY': import.meta.env.VITE_OPENSEA_API_KEY,
          'accept': 'application/json'
        }
      });

      if (!res.ok) throw new Error(`OpenSea API Error: ${res.status}`);
      const data = await res.json();
      const events: any[] = data.asset_events || [];
      if (events.length === 0) break;

      for (const e of events) {
        const symbol = e.payment?.symbol || '';
        if (!['ETH', 'WETH'].includes(symbol) || !e.payment?.quantity) continue;
        const nft = e.nft || {};
        const id = nft.identifier || '';
        if (!id) continue;
        
        if (!lastSaleByNFT.has(id)) {
          lastSaleByNFT.set(id, e);
        }
      }

      page++;

      if (lastSaleByNFT.size === lastSize) {
        stablePages++;
        if (stablePages >= 10) break;
      } else {
        stablePages = 0;
        lastSize = lastSaleByNFT.size;
      }

      if (!data.next) break;
      cursor = data.next;
    }

    const sales: SaleEvent[] = Array.from(lastSaleByNFT.values())
      .map((e: any) => {
        const nft = e.nft || {};
        const priceWei = e.payment.quantity as string;
        const currency = e.payment.symbol || 'ETH';
        return {
          event_id: e.order_hash || `${nft.identifier}-${e.event_timestamp}`,
          identifier: nft.identifier || '?',
          name: nft.name || `TATSU #${nft.identifier}`,
          image_url: nft.display_image_url || nft.image_url || '',
          priceEth: weiToEth(priceWei),
          priceWei: BigInt(priceWei),
          currency,
          seller: e.seller || '',
          buyer: e.buyer || '',
          event_timestamp: Number(e.event_timestamp) || 0,
          opensea_url: `https://opensea.io/assets/ethereum/${nft.contract}/${nft.identifier}`
        };
      })
      .sort((a, b) => (b.priceWei > a.priceWei ? 1 : b.priceWei < a.priceWei ? -1 : 0));

    allSales.value = sales;

    sessionStorage.setItem(CACHE_KEY, JSON.stringify(
      { timestamp: Date.now(), sales: sales }, 
      (key, value) => typeof value === 'bigint' ? value.toString() : value
    ));

  } catch (err) {
    console.error('Hall of Fame fetch error:', err);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

const { startLoading, stopLoading } = useLoading();
const { waitForFonts } = useAssetLoading();

onMounted(async () => {
  startLoading();
  await waitForFonts();
  await fetchSales();
  stopLoading();
});
</script>

<style scoped>
/* ---- BASE (Plantilla Solicitada) ---- */
.background {
  background-color: #DDD9DA;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  /* CRÍTICO: Permite que el contenido interno haga scroll si es más largo que la pantalla */
  overflow-y: auto; 
  overflow-x: hidden;
}

.navbar { position: absolute; top: 0; width: 100%; }
.navbar2 { display: none; position: absolute; top: 0; }

/* ---- HOF CONTAINER ---- */
.hof-container { 
  max-width: 1200px; 
  margin: 0 auto; 
  /* Cambiamos el 0 inicial por 120px para bajar el cuerpo entero */
  padding: 6dvh 40px 80px; 
  position: relative; 
  z-index: 1;
}

/* ---- Header (Izquierda - Centro - Derecha) ---- */
.hof-header { 
  display: grid; 
  grid-template-columns: 1fr auto 1fr; 
  align-items: center; 
  padding-top: 24px; 
  margin-bottom: 32px; 
  border-bottom: 1px solid rgba(17,17,17,0.1);
  padding-bottom: 16px;
}

/* Posiciones en el Grid */
.header-left { justify-self: start; }
.header-center { justify-self: center; }
.header-right { justify-self: end; display: flex; align-items: center; gap: 12px; }

/* Textos y Controles */
.hof-label { 
  font-family: 'Montserrat', sans-serif; 
  font-size: 14px; 
  font-weight: 700; 
  letter-spacing: 2px; 
  color: #F47A7A; 
  margin: 0; 
}
.hof-title { 
  font-family: 'Bernoru', sans-serif; 
  font-size: 40px; 
  font-weight: 900; 
  color: #111; 
  margin: 0; 
  line-height: 1; 
}
.top-label { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; color: #888; }
.limit-tabs { display: flex; gap: 4px; background: rgba(17,17,17,0.04); border-radius: 6px; padding: 4px; }
.limit-btn { background: none; border: none; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; color: #888; cursor: pointer; padding: 4px 10px; border-radius: 4px; }
.limit-btn.active { background: #111; color: #DDD9DA; }

/* ---- Loader & Empty ---- */
.loader-wrap { display: flex; flex-direction: column; align-items: center; padding: 120px 0; gap: 20px; }
.hof-spinner { width: 48px; height: 48px; border: 4px solid rgba(17,17,17,0.1); border-top-color: #F47A7A; border-radius: 50%; animation: spin 1s linear infinite; }
.loading-txt { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; color: #888; letter-spacing: 2px; }
@keyframes spin { to { transform: rotate(360deg); } }
.empty-wrap { text-align: center; padding: 100px 0; font-family: 'Montserrat', sans-serif; color: #888; font-size: 14px; }

/* ---- PODIUM (Desktop: 2 - 1 - 3) ---- */
.podium-section { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap: 20px; 
  margin-bottom: 2.5dvh; 
}
.podium-1 { order: 2; width: 30%; z-index: 2; } 
.podium-2 { order: 1; width: 27%; z-index: 1; }
.podium-3 { order: 3; width: 27%; z-index: 1; }

/* ---- BARRA RESUMEN (Franja Secundaria) ---- */
.stats-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px; 
  padding: 16px 0; 
  margin-bottom: 40px;
  border-top: 1px solid rgba(17,17,17,0.06);
  border-bottom: 1px solid rgba(17,17,17,0.06);
}
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.stat-lbl { 
  font-family: 'Montserrat', sans-serif; 
  font-size: 9px; 
  font-weight: 700; 
  color: #999; 
  letter-spacing: 1.5px; 
}
.stat-val { 
  font-family: 'Bernoru', sans-serif; 
  font-size: 20px; 
  font-weight: 900; 
  color: #111; 
  line-height: 1; 
}
.gold-text { color: #D4AF37; }
.stat-divider { width: 1px; height: 24px; background: rgba(17,17,17,0.06); }

/* ---- LIST SECTION ---- */
.list-section { 
  background: transparent; 
  border: none; 
  border-radius: 0;
  margin-top: 16px; 
}
.list-header {
  display: grid;
  grid-template-columns: 50px 60px 1.5fr 1fr 1fr 1.5fr 30px;
  padding: 12px 20px 16px; 
  background: transparent; 
  border-bottom: 2px solid rgba(17,17,17,0.1); 
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 800;
  color: #888;
  letter-spacing: 1px;
  opacity: 0; 
}

/* ---- ANIMATIONS ---- */
.fade-in { animation: fadeIn 0.6s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
.list-item-row { opacity: 0; }
.animate-slide-up { animation: slideUp 0.3s ease-out forwards; }
@keyframes slideUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .podium-section { gap: 12px; }
  .stats-bar { gap: 20px; padding: 16px 0; flex-wrap: wrap; border-left: none; border-right: none; }
}

/* Combinado con tu Media Query base de la plantilla */
@media only screen and (max-width: 768px) {
  .hof-container { 
    padding: 3dvh 16px 80px; /* 100px de espacio superior para móviles */
  }
  .navbar { display: none; }
  .navbar2 { display: block; top: 4dvh; position: absolute; }
  
  /* Header apilado */
  .hof-header { 
    grid-template-columns: 1fr; 
    gap: 16px; 
    justify-items: center; 
    text-align: center;
  }
  .header-left, .header-center, .header-right { justify-self: center; }
  .hof-title { font-size: 36px; } 
  
  /* Podio: 1° Arriba, 2° y 3° lado a lado */
  .podium-section { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 12px; 
    align-items: stretch;
  }
  .podium-1 { order: 1; grid-column: 1 / -1; width: 100%; max-width: 340px; margin: 0 auto 8px auto; }
  .podium-2 { order: 2; width: 100%; }
  .podium-3 { order: 3; width: 100%; }

  /* Barra de Stats */
  .stats-bar { 
    gap: 8px; 
    padding: 16px 0; 
    justify-content: space-between; 
    flex-wrap: nowrap; 
  }
  .stat-lbl { font-size: 8px; letter-spacing: 0.5px; text-align: center; }
  .stat-val { font-size: 16px; }

  .stat-divider { display: block; height: 20px; } 
  .list-header { display: none; }
  .dropupbttn { display: none; }

  menubttn { 
    display: block !important; 
    position: fixed !important;
    top: 0px !important; 
    left: 20px; 
    z-index: 55;
  }
  
  menubttn :deep(.drpbtn),
  menubttn :deep(.dropbtn) {
    top: 0 !important;
    margin-top: 0 !important;
  }
}

@media only screen and (max-width: 600px) and (max-height: 933px){
  /* Estilos específicos de tu plantilla para móvil/altura ajustados a .background */
  .background {
    display: flex;
    flex-direction: column;
  }
  .gallery-container {  padding-top: 0; }
  menubttn :deep(.dropbtn) {
    top: 0 !important;
    margin-top: 0 !important;
  }
}
</style>
