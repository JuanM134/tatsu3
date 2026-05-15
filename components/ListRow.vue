<template>
  <div class="list-row" @click="openSea">
    <span class="list-rank">#{{ rank }}</span>
    
    <div class="list-img-box">
      <img :src="sale.image_url" :alt="sale.name" class="list-thumb" loading="lazy" />
    </div>
    
    <span class="list-id">#{{ sale.identifier }}</span>
    
    <span class="list-price"><span class="eth-sm">Ξ</span> {{ sale.priceEth }}</span>
    
    <span class="list-time">{{ formatDate(sale.event_timestamp) }}</span>
    
    <span class="list-addrs">{{ shortAddr(sale.seller) }} → {{ shortAddr(sale.buyer) }}</span>
    
    <div class="list-ext">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ sale: any; rank: number; }>();

const shortAddr = (addr: string) => {
  if (!addr || addr.length < 10) return addr;
  return `${addr.substring(0, 4)}...${addr.substring(addr.length - 4)}`;
};

const toMs = (ts: string | number) => {
  const n = Number(ts);
  return n < 1e11 ? n * 1000 : n;
};

const formatDate = (ts: string | number) => {
  const ms = toMs(ts);
  if (!ms) return '';
  return new Date(ms).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const openSea = () => { window.open(props.sale.opensea_url, '_blank'); };
</script>

<style scoped>
.list-row {
  display: grid;
  /* Mismas columnas exactas que el .list-header del padre */
  grid-template-columns: 50px 60px 1.5fr 1fr 1fr 1.5fr 30px;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(17,17,17,0.06);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.list-row:last-child { border-bottom: none; }
.list-row:hover { background: rgba(17,17,17,0.04); transform: translateX(4px); }

.list-rank { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; color: #111; }
.list-img-box { width: 44px; height: 44px; border-radius: 6px; overflow: hidden; }
.list-thumb { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
.list-row:hover .list-thumb { transform: scale(1.1); }

.list-id { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; color: #111; }
.list-price { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 800; color: #111; display: flex; align-items: center; gap: 4px; }
.eth-sm { font-size: 12px; color: #888; font-weight: 600; }

.list-time { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; color: #555; }
.list-addrs { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 500; color: #888; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.list-ext { color: #888; text-align: right; transition: transform 0.2s, color 0.2s; }
.list-row:hover .list-ext { color: #111; transform: translateX(3px) translateY(-3px); }

@media (max-width: 768px) {
  /* En móvil volvemos a flexbox para hacerlo más simple y apilable */
  .list-row {
    display: flex;
    gap: 12px;
    padding: 12px 16px;
  }
  .list-time, .list-id { display: none; } /* Ocultamos datos no esenciales */
  .list-addrs { font-size: 10px; flex-grow: 1; }
  .list-img-box { width: 40px; height: 40px; flex-shrink: 0; }
  .list-price { margin-left: auto; }
}
</style>