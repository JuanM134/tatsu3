<template>
  <div class="background">
    <navbar class="navbar" />
    
    <Dropupbttn class="dropupbttn" style="z-index: 4; top: 88.5%; position: fixed;" />
    <home class="dropupbttn" style="z-index: 5; position: fixed;" /> 

    <div class="gallery-container">

              <menubttn style="top: 0%;"/>
      <navbar2 class="navbar2" />

      <div class="gallery-layout">


        
        <aside class="filters-sidebar">
          <div class="filter-header-main">
            <h3>Attributtes</h3>
            <button class="clear-btn" @click="clearAllFilters">Clear All</button>
          </div>
          
          <div v-if="isLoading" class="loading-text">Loading filters...</div>
          
          <div v-else class="filter-accordion">
            <div 
              v-for="(filter, index) in dynamicFilters" 
              :key="index" 
              class="filter-group"
              :class="{ 'is-expanded': filter.expanded }"
            >
              <button class="filter-title" @click="toggleFilter(index)">
                <span class="filter-name">{{ filter.name }}</span>
                <div class="filter-meta">
                  <span class="filter-count">{{ filter.totalCount }}</span>
                  <svg class="chevron" :class="{ 'rotated': filter.expanded }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>

              <div v-show="filter.expanded" class="filter-content">
                <div class="search-box">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input type="text" v-model="filter.searchQuery" placeholder="Buscar atributo" />
                </div>

                <ul class="options-list">
                  <li v-for="(opt, optIdx) in getFilteredOptions(filter)" :key="optIdx">
                    <label class="checkbox-container">
                      <div class="checkbox-left">
                        <input type="checkbox" v-model="opt.selected" />
                        <span class="checkmark"></span>
                        <span class="opt-label">{{ opt.label }}</span>
                      </div>
                      <span class="opt-count">{{ opt.count }}</span>
                    </label>
                  </li>
                  <li v-if="getFilteredOptions(filter).length === 0" class="no-results">
                    No results found
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>

        <main class="gallery-main">
          
          <div class="collection-tabs">
            <button 
              v-for="col in availableCollections" 
              :key="col.slug"
              :class="{ active: currentCollection === col.slug }"
              @click="switchCollection(col.slug)"
            >
              {{ col.name }}
            </button>
          </div>

          <div class="results-bar">
            <div class="results-count">
              <span v-if="isLoading">Loading collection...</span>
              <span v-else>{{ filteredNFTs.length }} RESULTS</span>
            </div>
            
            <div class="results-actions" v-if="!isLoading">
              <div class="search-id-box">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" v-model="searchId" placeholder="Buscar ID..." />
              </div>

              <div class="sort-dropdown">
                <select v-model="sortOrder">
                  <option value="default">Sort: OpenSea Default</option>
                  <option value="asc">Sort: Low to High</option>
                  <option value="desc">Sort: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div v-if="isLoading" class="loader-container">
            <div class="spinner"></div>
          </div>

          <div v-else class="nft-grid">
            <div 
              v-for="nft in filteredNFTs" 
              :key="nft.identifier" 
              class="nft-card"
              @click="openModal(nft)"
            >
              <div class="img-wrapper">
                <img :src="nft.image_url" :alt="nft.name" class="img-primary" loading="lazy" />
                <img v-if="nft.image_alt_url" :src="nft.image_alt_url" :alt="nft.name + ' alt'" class="img-secondary" loading="lazy" />
              </div>

              <div class="card-info">
                <div class="card-header">
                  <span class="nft-name">{{ nft.collection_name }}</span>
                  <span class="nft-id">#{{ nft.identifier }}</span>
                </div>
              </div>
            </div>
            
            <div v-if="filteredNFTs.length === 0 && !isLoading" class="empty-state">
              No NFTs match your search or selected filters.
            </div>
          </div>

        </main>
      </div>
    </div>

    <transition name="fade-modal">
      <div v-if="selectedNFT" class="nft-modal-overlay" @click.self="closeModal">
        <div class="nft-modal-content">
          <button class="modal-close-btn" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="modal-body-layout">
            <div class="modal-image-col" :style="{ backgroundColor: modalBgColor }">
              <img ref="modalImgRef" :src="selectedNFT.image_url" :alt="selectedNFT.name" crossorigin="anonymous" @load="extractBackgroundColor" />
            </div>

            <div class="modal-info-col">
              <div class="modal-header-info">
                <h4 class="modal-collection">{{ selectedNFT.collection_name }}</h4>
                <h2 class="modal-title">{{ selectedNFT.name }}</h2>
                <span class="modal-id-badge">ID #{{ selectedNFT.identifier }}</span>
              </div>

              <div class="modal-owner">
                <span>OWNED BY</span>
                <div class="owner-badge large">
                  <div v-if="selectedNFT.ownerDisplay !== 'Cargando...'" class="owner-avatar"></div>
                  <svg v-else class="mini-spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>
                  <span class="owner-address">{{ formatAddress(selectedNFT.ownerDisplay) }}</span>
                </div>
              </div>

              <div class="modal-traits-section">
                <h3>Properties</h3>
                <div class="traits-grid">
                  <div v-for="(trait, idx) in selectedNFT.traits" :key="idx" class="trait-box">
                    <span class="trait-type">{{ trait.trait_type }}</span>
                    <span class="trait-value">{{ trait.value }}</span>
                  </div>
                </div>
                <div v-if="selectedNFT.traits.length === 0" class="no-traits">
                  No properties available.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useLoading } from '@/composables/useLoading';
import { useAssetLoading } from '@/composables/useAssetLoading';

// ------------------ Interfaces ------------------
interface Trait { trait_type: string; value: string; }
interface NFT {
  identifier: string;
  name: string;
  collection_name: string;
  contract: string;
  image_url: string;
  image_alt_url?: string;
  owner: string;
  ownerDisplay: string; 
  traits: Trait[];
}

interface FilterOption { label: string; count: number; selected: boolean; }
interface FilterCategory { name: string; totalCount: number; expanded: boolean; searchQuery: string; options: FilterOption[]; }

// ------------------ Estado ------------------
const isLoading = ref(true);
const rawNFTs = ref<NFT[]>([]);
const dynamicFilters = ref<FilterCategory[]>([]);
const selectedNFT = ref<NFT | null>(null);

const modalBgColor = ref('#EAE8E8');
const modalImgRef = ref<HTMLImageElement | null>(null);

const searchId = ref('');
const sortOrder = ref('default'); // NUEVO: Inicializamos en el orden crudo de OpenSea

const availableCollections = [
  { name: 'TATSU OFFICIAL', slug: 'tatsuofficial' }
];
const currentCollection = ref('tatsuofficial');

// ------------------ Lógica de Datos (OpenSea) ------------------
const switchCollection = async (slug: string) => {
  if (currentCollection.value === slug) return;
  currentCollection.value = slug;
  await fetchCollectionData(slug);
};

const fetchCollectionData = async (slug: string) => {
  isLoading.value = true;
  rawNFTs.value = []; 
  dynamicFilters.value = []; 
  searchId.value = ''; 
  
  try {
    let allFetchedNFTs: any[] = [];
    let nextCursor = '';
    let hasMore = true;

    while (hasMore) {
      let url = `https://api.opensea.io/api/v2/collection/${slug}/nfts?limit=200`;
      if (nextCursor) {
        url += `&next=${nextCursor}`;
      }

      const response = await fetch(url, {
        headers: { 
            'X-API-KEY': import.meta.env.VITE_OPENSEA_API_KEY,
            'accept': 'application/json'
        }
      });

      if (!response.ok) {
          throw new Error(`Error en la API: ${response.status}`);
      }
      
      const data = await response.json();
      allFetchedNFTs = allFetchedNFTs.concat(data.nfts);

      if (data.next) {
        nextCursor = data.next;
      } else {
        hasMore = false; 
      }
    }
      
    rawNFTs.value = allFetchedNFTs.map((nft: any) => {
      const ownerAddress = (nft.owners && nft.owners.length > 0) ? nft.owners[0].address : '';
      
      return {
        identifier: nft.identifier,
        name: nft.name || `${nft.collection} #${nft.identifier}`,
        collection_name: nft.collection,
        contract: nft.contract,
        image_url: nft.display_image_url || nft.image_url, 
        owner: ownerAddress, 
        ownerDisplay: '', 
        traits: nft.traits || []
      };
    });
  
    buildDynamicFilters(rawNFTs.value);
    isLoading.value = false;
    
  } catch (error) {
    console.error("Error fetching from OpenSea:", error);
    isLoading.value = false;
  }
};

const fetchOwnerDetails = async (nft: NFT) => {
  let targetAddress = nft.owner;
  
  if (!targetAddress || targetAddress === '') {
    try {
      const res = await fetch(`https://api.opensea.io/api/v2/chain/ethereum/contract/${nft.contract}/nfts/${nft.identifier}`, {
        headers: { 'X-API-KEY': import.meta.env.VITE_OPENSEA_API_KEY, 'accept': 'application/json' }
      });
      const data = await res.json();
      if (data.nft && data.nft.owners && data.nft.owners.length > 0) {
        targetAddress = data.nft.owners[0].address;
        nft.owner = targetAddress;
      }
    } catch (e) {
      console.error("Error obteniendo la address", e);
    }
  }

  if (targetAddress) {
    try {
      const accountRes = await fetch(`https://api.opensea.io/api/v2/accounts/${targetAddress}`, {
        headers: { 'X-API-KEY': import.meta.env.VITE_OPENSEA_API_KEY, 'accept': 'application/json' }
      });
      if (accountRes.ok) {
        const accountData = await accountRes.json();
        nft.ownerDisplay = accountData.username || targetAddress;
      } else {
        nft.ownerDisplay = targetAddress;
      }
    } catch (e) {
      nft.ownerDisplay = targetAddress;
    }
  } else {
    nft.ownerDisplay = 'No disponible';
  }
};

const buildDynamicFilters = (nfts: NFT[]) => {
  const traitMap: Record<string, Record<string, number>> = {};

  nfts.forEach(nft => {
    nft.traits.forEach(t => {
      if (!traitMap[t.trait_type]) traitMap[t.trait_type] = {};
      if (!traitMap[t.trait_type][t.value]) traitMap[t.trait_type][t.value] = 0;
      traitMap[t.trait_type][t.value]++;
    });
  });

  dynamicFilters.value = Object.keys(traitMap).map(traitType => {
    const options = Object.keys(traitMap[traitType]).map(value => ({
      label: value,
      count: traitMap[traitType][value],
      selected: false
    })).sort((a, b) => b.count - a.count);

    return {
      name: traitType,
      totalCount: options.length,
      expanded: false,
      searchQuery: '',
      options
    };
  });
};

const filteredNFTs = computed(() => {
  let result = rawNFTs.value;

  const activeFilters = dynamicFilters.value.filter(cat => cat.options.some(opt => opt.selected));
  if (activeFilters.length > 0) {
    result = result.filter(nft => {
      return activeFilters.every(category => {
        const selectedValues = category.options.filter(opt => opt.selected).map(opt => opt.label);
        const nftTraitValue = nft.traits.find(t => t.trait_type === category.name)?.value;
        return nftTraitValue && selectedValues.includes(nftTraitValue);
      });
    });
  }

  if (searchId.value.trim() !== '') {
    const searchTerm = searchId.value.trim();
    result = result.filter(nft => nft.identifier.includes(searchTerm));
  }

  // NUEVO: Solo hacemos un reordenamiento forzado si el usuario seleccionó asc o desc.
  // Si está en 'default', respeta el array original que mandó la API de OpenSea.
  if (sortOrder.value !== 'default') {
    result = [...result].sort((a, b) => {
      const idA = parseInt(a.identifier, 10);
      const idB = parseInt(b.identifier, 10);
      
      if (isNaN(idA) || isNaN(idB)) {
          return sortOrder.value === 'asc' 
            ? a.identifier.localeCompare(b.identifier) 
            : b.identifier.localeCompare(a.identifier);
      }

      return sortOrder.value === 'asc' ? idA - idB : idB - idA;
    });
  }

  return result;
});

const toggleFilter = (index: number) => { dynamicFilters.value[index].expanded = !dynamicFilters.value[index].expanded; };
const clearAllFilters = () => { 
  dynamicFilters.value.forEach(cat => cat.options.forEach(opt => opt.selected = false)); 
  searchId.value = ''; 
};
const getFilteredOptions = (filter: FilterCategory) => {
  if (!filter.searchQuery) return filter.options;
  return filter.options.filter(opt => opt.label.toLowerCase().includes(filter.searchQuery.toLowerCase()));
};

const formatAddress = (address: string) => {
  if (!address || address === 'Cargando...' || address === 'No disponible' || address === 'Error') return address;
  if (address.endsWith('.eth')) return address;
  
  if (address.startsWith('0x') && address.length > 12) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  }
  return address;
};

const extractBackgroundColor = () => {
  const img = modalImgRef.value;
  if (!img) return;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return;

  canvas.width = 10;
  canvas.height = 10;

  try {
    context.drawImage(img, 0, 0, 10, 10);
    const data = context.getImageData(0, 0, 1, 1).data;
    modalBgColor.value = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
  } catch (e) {
    console.error("No se pudo extraer el color de fondo", e);
    modalBgColor.value = '#EAE8E8';
  }
};

const openModal = (nft: NFT) => { 
  selectedNFT.value = nft; 
  document.body.style.overflow = 'hidden'; 
  
  if (!nft.ownerDisplay || nft.ownerDisplay === '') {
    nft.ownerDisplay = 'Cargando...';
    fetchOwnerDetails(nft);
  }
};

const closeModal = () => { 
  selectedNFT.value = null; 
  document.body.style.overflow = ''; 
  modalBgColor.value = '#EAE8E8'; 
};

const { startLoading, stopLoading } = useLoading();
const { waitForFonts } = useAssetLoading();

onMounted(async () => {
  startLoading();
  await waitForFonts();
  await fetchCollectionData(currentCollection.value);
  stopLoading();
});
</script>

<style scoped>
/* ------------------ Global Background & Navigation Overrides ------------------ */
.background { 
  background-color: #DDD9DA; 
  width: 100%; 
  min-height: 100vh; 
  position: relative; 
  /* FIX VITAL: 'clip' en vez de 'hidden' permite que funcione el position: sticky */
  overflow-x: clip; 
}

/* FIX: Convertimos las Navbars en Sticky para que sigan el scroll en Desktop y Móvil */
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
}

.navbar2 { 
  display: none; 
  position: sticky;
  top: 0;
  z-index: 50;
  left: 0%;
}


:deep(.dropup .menu-container) {
  top: -13% !important; 
}

/* ------------------ Layout ------------------ */
/* Se ajustó el padding superior porque ahora el navbar es sticky y ocupa espacio físico */
.gallery-container { max-width: 1440px; margin: 0 auto; padding-top: 10px; min-height: 100vh; box-sizing: border-box; }
.gallery-layout { display: flex; flex-direction: row; gap: 30px; padding: 0 40px 60px 40px; }

/* ------------------ Collection Tabs ------------------ */
.collection-tabs { display: flex; gap: 20px; margin-bottom: 20px; border-bottom: 2px solid rgba(17, 17, 17, 0.1);  margin-top: 5vh;}
.collection-tabs button { background: none; border: none; font-family: 'Bernoru', sans-serif; font-size: 24px; color: #888; padding: 0 0 10px 0; cursor: pointer; position: relative; transition: color 0.3s; }
.collection-tabs button:hover { color: #111; }
.collection-tabs button.active { color: #111; }
.collection-tabs button.active::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 3px; background-color: #F47A7A; }

/* ------------------ Sidebar Filters ------------------ */
.filters-sidebar { 
  width: 300px; 
  flex-shrink: 0; 
  display: flex; 
  flex-direction: column; 
  position: sticky; /* Ahora este Sticky sí funciona gracias a overflow-x: clip */
  top: 100px; /* Offset adecuado para esquivar el navbar pegajoso superior */
  height: calc(100vh - 120px); 
  overflow-y: auto; 
}
.filters-sidebar::-webkit-scrollbar { width: 4px; }
.filters-sidebar::-webkit-scrollbar-track { background: transparent; }
.filters-sidebar::-webkit-scrollbar-thumb { background: rgba(17, 17, 17, 0.2); border-radius: 10px; }

.filter-header-main { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid rgba(17, 17, 17, 0.1); }
.filter-header-main h3 { font-family: 'Bernoru', sans-serif; font-size: 20px; margin: 0; color: #111; }
.clear-btn { background: none; border: none; font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; color: #111; cursor: pointer; text-transform: uppercase; }
.clear-btn:hover { color: #F47A7A; }

.filter-accordion { display: flex; flex-direction: column; gap: 1px; background-color: rgba(17, 17, 17, 0.05); border-radius: 12px; overflow: hidden; }
.filter-group { background-color: #DDD9DA; border-bottom: 1px solid rgba(17, 17, 17, 0.05); }
.filter-title { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 18px 16px; background: none; border: none; cursor: pointer; }
.filter-name { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 700; color: #111; }
.filter-meta { display: flex; align-items: center; gap: 12px; }
.filter-count { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; color: #666; }
.chevron { transition: transform 0.3s ease; color: #111; }
.chevron.rotated { transform: rotate(180deg); }

.filter-content { padding: 0 16px 16px 16px; }
.search-box { display: flex; align-items: center; gap: 8px; background-color: rgba(17, 17, 17, 0.04); padding: 10px 12px; border-radius: 8px; margin-bottom: 12px; border: 1px solid rgba(17, 17, 17, 0.05); }
.search-box input { border: none; background: transparent; width: 100%; font-family: 'Montserrat', sans-serif; font-size: 13px; color: #111; outline: none; }
.options-list { list-style: none; padding: 0; margin: 0; max-height: 200px; overflow-y: auto; }
.options-list::-webkit-scrollbar { width: 4px; }
.options-list::-webkit-scrollbar-thumb { background: rgba(17, 17, 17, 0.2); border-radius: 10px; }
.options-list li { padding: 8px 0; }

.checkbox-container { display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none; width: 100%; }
.checkbox-left { display: flex; align-items: center; gap: 10px; }
.checkbox-container input { position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0; }
.checkmark { height: 18px; width: 18px; border: 2px solid rgba(17, 17, 17, 0.2); border-radius: 4px; position: relative; }
.checkbox-container:hover input ~ .checkmark { border-color: #111; }
.checkbox-container input:checked ~ .checkmark { background-color: #111; border-color: #111; }
.checkmark:after { content: ""; position: absolute; display: none; left: 5px; top: 2px; width: 4px; height: 8px; border: solid white; border-width: 0 2px 2px 0; transform: rotate(45deg); }
.checkbox-container input:checked ~ .checkmark:after { display: block; }
.opt-label { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; color: #333; }
.opt-count { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; color: #111; }

/* ------------------ Main Area & Actions ------------------ */
.gallery-main { flex-grow: 1; display: flex; flex-direction: column; }

.results-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(17, 17, 17, 0.1); flex-wrap: wrap; gap: 16px; }
.results-count { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 700; color: #111; }

.results-actions { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
.search-id-box { display: flex; align-items: center; gap: 8px; background-color: rgba(17, 17, 17, 0.04); padding: 8px 12px; border-radius: 8px; border: 1px solid rgba(17, 17, 17, 0.1); }
.search-id-box input { border: none; background: transparent; width: 120px; font-family: 'Montserrat', sans-serif; font-size: 13px; color: #111; outline: none; }
.search-id-box input::placeholder { color: #888; }

.sort-dropdown select {
  appearance: none; background-color: transparent; border: 1px solid rgba(17, 17, 17, 0.1);
  padding: 8px 32px 8px 16px; border-radius: 8px; font-family: 'Montserrat', sans-serif;
  font-size: 13px; font-weight: 600; color: #111; cursor: pointer; outline: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 12px center; transition: background-color 0.2s;
}
.sort-dropdown select:hover { background-color: rgba(17, 17, 17, 0.05); }

.nft-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }
.nft-card { border-radius: 12px; display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
.nft-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.15); }

.img-wrapper { position: relative; width: 100%; aspect-ratio: 1 / 1; background-color: transparent; border-radius: 12px; overflow: hidden; }
.img-primary, .img-secondary { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: opacity 0.3s, transform 0.3s; }
.img-secondary { opacity: 0; }
.nft-card:hover .img-primary { opacity: 0; transform: scale(1.05); } 
.nft-card:hover .img-secondary { opacity: 1; transform: scale(1); }

.card-info { padding: 16px 8px 8px 8px; display: flex; flex-direction: column; gap: 12px; }
.card-header { display: flex; justify-content: space-between; align-items: center; font-family: 'Bernoru', sans-serif; color: #111; }
.nft-name { font-size: 18px; }
.nft-id { font-size: 16px; color: #666; }

.loader-container { display: flex; justify-content: center; align-items: center; height: 40vh; }
.spinner { width: 40px; height: 40px; border: 4px solid rgba(17,17,17,0.1); border-top-color: #F47A7A; border-radius: 50%; animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.empty-state { grid-column: 1 / -1; text-align: center; font-family: 'Montserrat', sans-serif; color: #888; padding: 40px 0; }

/* ------------------ MODAL DE NFT ------------------ */
.nft-modal-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(8px);
  z-index: 9999; display: flex; justify-content: center; align-items: center;
  padding: 20px; box-sizing: border-box;
}

.nft-modal-content {
  background-color: #DDD9DA;
  width: 100%;
  max-width: 1100px; 
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.modal-close-btn {
  position: absolute; top: 16px; right: 16px;
  background: rgba(17, 17, 17, 0.1); border: none; width: 36px; height: 36px;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: #111; transition: background-color 0.2s; z-index: 10;
}
.modal-close-btn:hover { background: rgba(17, 17, 17, 0.2); }

.modal-body-layout {
  display: flex;
  flex-direction: row;
  height: auto;
  min-height: 500px;
}

.modal-image-col {
  width: 50%;
  aspect-ratio: 1 / 1;
  background-color: transparent; 
  padding: 0;
}

.modal-image-col img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  border-radius: 16px 0 0 16px; 
}

.modal-info-col {
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.modal-header-info { margin-bottom: 24px; }
.modal-collection { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 700; color: #F47A7A; text-transform: uppercase; margin: 0 0 8px 0; letter-spacing: 1px; }
.modal-title { font-family: 'Bernoru', sans-serif; font-size: 40px; color: #111; margin: 0; line-height: 1.1; text-transform: uppercase; }
.modal-id-badge { font-family: 'Montserrat', sans-serif; font-size: 16px; color: #666; font-weight: 600; margin-top: 5px; display: block; }

.modal-owner { display: flex; flex-direction: column; gap: 8px; margin-bottom: 32px; }
.modal-owner > span { font-family: 'Montserrat', sans-serif; font-size: 12px; color: #666; text-transform: uppercase; font-weight: 600; }

.owner-badge.large {
  display: inline-flex; align-items: center; gap: 8px;
  background-color: rgba(17, 17, 17, 0.04);
  padding: 8px 14px; border-radius: 20px; width: fit-content;
}
.owner-avatar { width: 18px; height: 18px; border-radius: 50%; background: linear-gradient(135deg, #111, #F47A7A); }
.owner-address { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 600; color: #222; }

.mini-spinner { width: 16px; height: 16px; animation: spin 1s linear infinite; color: #888; }

.modal-traits-section h3 { font-family: 'Montserrat', sans-serif; font-size: 16px; color: #111; margin-bottom: 16px; font-weight: 700; }
.traits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.trait-box { background-color: rgba(17, 17, 17, 0.05); border: 1px solid rgba(17, 17, 17, 0.1); border-radius: 8px; padding: 12px; display: flex; flex-direction: column; gap: 4px; text-align: center; }
.trait-type { font-family: 'Montserrat', sans-serif; font-size: 11px; color: #888; text-transform: uppercase; font-weight: 600; }
.trait-value { font-family: 'Montserrat', sans-serif; font-size: 13px; color: #111; font-weight: 700; text-transform: capitalize; }
.no-traits { font-family: 'Montserrat', sans-serif; font-size: 13px; color: #888; font-style: italic; }

.fade-modal-enter-active, .fade-modal-leave-active { transition: opacity 0.3s ease; }
.fade-modal-enter-from, .fade-modal-leave-to { opacity: 0; }
.fade-modal-enter-active .nft-modal-content, .fade-modal-leave-active .nft-modal-content { transition: transform 0.3s ease; }
.fade-modal-enter-from .nft-modal-content, .fade-modal-leave-to .nft-modal-content { transform: translateY(20px) scale(0.95); }

/* ------------------ Media Queries ------------------ */

@media (max-width: 1024px) {
  .gallery-layout { padding: 0 20px 40px 20px; }
  .filters-sidebar { width: 240px; }
  .nft-grid { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); }
  .modal-image-col { width: 45%; }
  .modal-info-col { width: 55%; padding: 24px; }
}

@media (max-width: 768px) {
  .gallery-layout { flex-direction: column; padding: 0 16px 80px 16px; }
  .filters-sidebar { display: none; }
  .gallery-container { padding-top: 40px; }
  .nft-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
  
 menubttn { 
    display: block !important; 
    position: fixed !important;
    top: 0px !important; 
    left: 20px; /* Para que no se pegue totalmente al borde izquierdo */
    z-index: 55;
  }
  
  /* Aplicamos el :deep directo a la etiqueta apuntando a ambas posibles clases */
  menubttn :deep(.drpbtn),
  menubttn :deep(.dropbtn) {
    top: 0 !important;
    margin-top: 0 !important;
  }
  .navbar2 { display: block; top: 5%; }
  .navbar { display: none; }
  .dropupbttn { display: none; }
  
  .results-bar { gap: 12px; }
  .results-actions { width: 100%; justify-content: space-between; gap: 8px; }
  .search-id-box { flex-grow: 1; width: auto; }
  .search-id-box input { width: 100%; }
  .sort-dropdown { flex-shrink: 0; }
  .sort-dropdown select { padding: 8px 24px 8px 12px; }
  
  .modal-body-layout { flex-direction: column; max-height: 85vh; }
  .modal-image-col { width: 100%; aspect-ratio: 1 / 1; border-radius: 16px 16px 0 0; }
  .modal-image-col img { border-radius: 16px 16px 0 0; }
  .modal-info-col { width: 100%; padding: 24px; }
  .modal-title { font-size: 32px; }
  .traits-grid { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .gallery-container {  padding-top: 0; }
  menubttn :deep(.dropbtn) {
    top: 0 !important;
    margin-top: 0 !important;
  }
}
</style>
