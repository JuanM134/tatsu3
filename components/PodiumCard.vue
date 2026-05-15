<template>
  <div :class="['podium-card', `rank-${rank}`]" @click="openSea">
    <div :class="['rank-badge', badgeClass]">Ξ {{ rankText }}</div>
    <div class="podium-img-wrap">
      <img :src="sale.image_url" :alt="sale.name" class="podium-img" loading="lazy" />
    </div>
    <div class="podium-info">
      <div class="podium-meta">
        <span class="podium-id">#{{ sale.identifier }}</span>
        <span class="podium-date" v-if="rank === 1">{{ formatDate(sale.event_timestamp) }}</span>
      </div>
      <div :class="['podium-price', priceClass]">
        <span class="eth-icon">Ξ</span>
        <span class="price-val">{{ sale.priceEth }}</span>
      </div>
      <div class="podium-addresses" v-if="rank === 1">
        <div class="addr-row"><span class="addr-label">SELLER</span><span class="addr-val">{{ shortAddr(sale.seller) }}</span></div>
        <div class="addr-row"><span class="addr-label">BUYER</span><span class="addr-val">{{ shortAddr(sale.buyer) }}</span></div>
      </div>
      <!-- Simplificamos CTA en 2 y 3 para hacerlas más compactas -->
      <button :class="['verify-btn', linkClass]" @click.stop="openSea">
        VERIFY <span v-if="rank === 1">ON OPENSEA</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ sale: any; rank: number; }>();

const badgeClass = computed(() => props.rank === 1 ? 'gold' : props.rank === 2 ? 'silver' : 'bronze');
const priceClass = computed(() => props.rank === 1 ? 'gold-price' : '');
const linkClass = computed(() => props.rank === 1 ? 'gold-link' : props.rank === 2 ? 'silver-link' : 'bronze-link');
const rankText = computed(() => props.rank === 1 ? '1ST' : props.rank === 2 ? '2ND' : '3RD');

const shortAddr = (addr: string) => {
  if (!addr || addr.length < 10) return addr;
  return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
};

const toMs = (ts: string | number) => {
  const n = Number(ts);
  return n < 1e11 ? n * 1000 : n;
};

const formatDate = (ts: string | number) => {
  const ms = toMs(ts);
  if (!ms) return '';
  return new Date(ms).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
};

const openSea = () => { window.open(props.sale.opensea_url, '_blank'); };
</script>

<style scoped>
.podium-card {
  background: #CFCBCC;
  border: 1px solid rgba(17,17,17,0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}
.podium-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(17,17,17,0.15); }

/* 1ST PLACE - Taller, more padding */
.rank-1 {
  border-color: #DAA520;
  box-shadow: 0 0 0 1px #DAA520, 0 10px 30px rgba(218, 165, 32, 0.20);
  transform: translateY(-12px); /* Eleva el card central */
}
.rank-1:hover { transform: translateY(-20px); }
.rank-1 .podium-info { padding: 18px 20px; gap: 12px; }

/* 2ND & 3RD - More compact */
.rank-2, .rank-3 { transform: translateY(0); }
.rank-2 .podium-info, .rank-3 .podium-info { padding: 16px; gap: 10px; }
.rank-2 .price-val, .rank-3 .price-val { font-size: 24px !important; }

.rank-badge {
  position: absolute; top: 12px; left: 12px;
  backdrop-filter: blur(8px); border-radius: 20px;
  font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 800;
  padding: 4px 10px; z-index: 2; border: 1px solid rgba(17,17,17,0.15);
}
.gold { background: linear-gradient(135deg, #FFDF73 0%, #D4AF37 100%); color: #111; border-color: #DAA520; box-shadow: 0 4px 10px rgba(212, 175, 55, 0.4); }
.silver { background: linear-gradient(135deg, #F5F5F5 0%, #BDBDBD 100%); color: #111; border-color: #9E9E9E; }
.bronze { background: linear-gradient(135deg, #E6A16B 0%, #CD7F32 100%); color: #111; border-color: #8B4513; }

.podium-img-wrap { width: 100%; aspect-ratio: 1 / 1; overflow: hidden; }
.podium-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.podium-card:hover .podium-img { transform: scale(1.06); }

.podium-info { display: flex; flex-direction: column; background: #CFCBCC; border-top: 1px solid rgba(17,17,17,0.08); flex-grow: 1; justify-content: space-between; }
.podium-meta { display: flex; justify-content: space-between; align-items: center; }
.podium-id { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 700; color: #555; }
.podium-date { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; color: #888; }

.podium-price { display: flex; align-items: baseline; gap: 4px; color: #111; }
.gold-price { color: #D4AF37; }
.eth-icon { font-size: 18px; font-weight: 700; }
.price-val { font-family: 'Bernoru', sans-serif; font-size: 28px; font-weight: 900; line-height: 1; }
.rank-2 .price-val, .rank-3 .price-val { font-size: 24px !important; }

.podium-addresses { display: flex; flex-direction: column; gap: 4px; margin-top: 4px; }
.addr-row { display: flex; gap: 10px; align-items: center; }
.addr-label { font-family: 'Montserrat', sans-serif; font-size: 9px; font-weight: 700; color: #999; letter-spacing: 1px; width: 40px; }
.addr-val { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 600; color: #555; }

.verify-btn { display: inline-flex; align-items: center; gap: 6px; background: none; border: none; padding: 0; font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; cursor: pointer; transition: color 0.2s; margin-top: auto; padding-top: 8px;}
.gold-link { color: #D4AF37; } .gold-link:hover { color: #b8962e; }
.silver-link { color: #757575; } .silver-link:hover { color: #111; }
.bronze-link { color: #8B4513; } .bronze-link:hover { color: #5e2e0c; }

@media (max-width: 768px) {
  /* Reducimos el relleno interno para ganar espacio */
  .rank-1 .podium-info { padding: 16px; gap: 12px; }
  .rank-2 .podium-info, .rank-3 .podium-info { padding: 12px; gap: 8px; }

  /* Fuentes más pequeñas para precios */
  .price-val { font-size: 24px; }
  .rank-2 .price-val, .rank-3 .price-val { font-size: 18px !important; }
  
  /* Ajustamos el botón CTA */
  .verify-btn { font-size: 9px; letter-spacing: 1px; }
  
  /* Ajuste de medallas */
  .rank-badge { font-size: 9px; padding: 3px 8px; top: 8px; left: 8px; }
}
</style>