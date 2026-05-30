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
            <h3>Attributes</h3>
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
                  <input type="text" v-model="filter.searchQuery" placeholder="Search attribute" />
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
                <input type="text" v-model="searchId" placeholder="Search ID..." />
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
              <div class="img-wrapper" :class="{ 'has-alt-img': !!nft.image_alt_url }">
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

    <Teleport to="body">
      <transition name="fade-modal">
        <div v-if="selectedNFT" class="nft-modal-overlay" @click.self="closeModal">
          <div class="nft-modal-content" :style="{ boxShadow: `0 25px 50px -12px ${modalBgColor}, 0 0 0 1px rgba(255,255,255,0.1)` }">
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
                  <div class="collection-row">
                    <h4 class="modal-collection">{{ selectedNFT.collection_name }}</h4>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F47A7A" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="verified-icon"><polygon points="12 2 15.09 5.09 19.5 4.5 21 8.91 24 12 21 15.09 19.5 19.5 15.09 18.91 12 22 8.91 18.91 4.5 19.5 3 15.09 0 12 3 8.91 4.5 4.5 8.91 5.09 12 2"></polygon><polyline points="9 12 11 14 15 10"></polyline></svg>
                  </div>
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

                <div class="modal-actions">
                  <a :href="`https://opensea.io/assets/ethereum/${selectedNFT.contract}/${selectedNFT.identifier}`" target="_blank" rel="noopener noreferrer" class="btn-opensea">
                    View on OpenSea
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>

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
const sortOrder = ref('default'); 

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
  overflow-x: clip; 
}

.navbar { position: sticky; top: 0; z-index: 50; width: 100%; }
.navbar2 { display: none; position: sticky; top: 0; z-index: 50; left: 0%; }

/* ------------------ Layout ------------------ */
.gallery-container { max-width: 1440px; margin: 0 auto; padding-top: 10px; min-height: 100vh; box-sizing: border-box; }
.gallery-layout { display: flex; flex-direction: row; gap: 30px; padding: 0 40px 60px 40px; }

/* ------------------ Collection Tabs ------------------ */
.collection-tabs { display: flex; gap: 20px; margin-bottom: 20px; border-bottom: 2px solid rgba(17, 17, 17, 0.1);  margin-top: 5vh;}
.collection-tabs button { background: none; border: none; font-family: 'Bernoru', sans-serif; font-size: 24px; color: #888; padding: 0 0 10px 0; cursor: pointer; position: relative; transition: color 0.3s; }
.collection-tabs button:hover, .collection-tabs button.active { color: #111; }
.collection-tabs button.active::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 3px; background-color: #F47A7A; }

/* ------------------ Sidebar Filters ------------------ */
.filters-sidebar { 
  width: 300px; flex-shrink: 0; display: flex; flex-direction: column; 
  position: sticky; top: 100px; height: calc(100vh - 120px); overflow-y: auto; 
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

.sort-dropdown select {
  appearance: none; background-color: transparent; border: 1px solid rgba(17, 17, 17, 0.1);
  padding: 8px 32px 8px 16px; border-radius: 8px; font-family: 'Montserrat', sans-serif;
  font-size: 13px; font-weight: 600; color: #111; cursor: pointer; outline: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 12px center; transition: background-color 0.2s;
}
.sort-dropdown select:hover { background-color: rgba(17, 17, 17, 0.05); }

.loader-container { display: flex; justify-content: center; align-items: center; height: 40vh; }
.spinner { width: 40px; height: 40px; border: 4px solid rgba(17,17,17,0.1); border-top-color: #F47A7A; border-radius: 50%; animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.empty-state { grid-column: 1 / -1; text-align: center; font-family: 'Montserrat', sans-serif; color: #888; padding: 40px 0; }

/* ------------------ NFT GRID & CARDS ------------------ */
.nft-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }

.nft-card { 
  background: rgba(255, 255, 255, 0.4); 
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 16px; 
  padding: 8px; 
  display: flex; 
  flex-direction: column; 
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
  cursor: pointer; 
}

.nft-card:hover { 
  transform: translateY(-6px); 
  border-color: #F47A7A; 
  box-shadow: 0 15px 30px -10px rgba(244, 122, 122, 0.2), 0 10px 15px -5px rgba(0, 0, 0, 0.05); 
}

.img-wrapper { 
  position: relative; 
  width: 100%; 
  aspect-ratio: 1 / 1; 
  background-color: rgba(17,17,17,0.03); 
  border-radius: 10px; 
  overflow: hidden; 
}

.img-primary, .img-secondary { 
  position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
  object-fit: cover; transition: opacity 0.4s ease, transform 0.4s ease; 
}
.img-secondary { opacity: 0; }

.nft-card:hover .img-primary { transform: scale(1.05); } 
.img-wrapper.has-alt-img:hover .img-primary { opacity: 0; }
.img-wrapper.has-alt-img:hover .img-secondary { opacity: 1; transform: scale(1.05); }

.card-info { padding: 12px 8px 4px 8px; display: flex; flex-direction: column; gap: 12px; }
.card-header { display: flex; justify-content: space-between; align-items: center; font-family: 'Bernoru', sans-serif; color: #111; }
.nft-name { font-size: 18px; }
.nft-id { font-size: 16px; color: #666; }

/* ------------------ MODAL DE NFT PREMIUM ------------------ */
:global(.nft-modal-overlay) {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background-color: rgba(10, 10, 10, 0.75); 
  backdrop-filter: blur(12px); 
  z-index: 9999; display: flex; justify-content: center; align-items: center;
  padding: 20px; box-sizing: border-box;
}

:global(.nft-modal-content) {
  background-color: #E8E5E6; 
  /* Damos un poco más de margen para que la altura dictada por el 1:1 sea mayor */
  width: 100%; max-width: 980px; 
  border-radius: 20px; 
  position: relative; overflow: hidden;
  transition: box-shadow 0.5s ease; 
}

:global(.modal-close-btn) {
  position: absolute; top: 15px; right: 15px;
  background: rgba(255, 255, 255, 0.5); border: 1px solid rgba(17, 17, 17, 0.1); 
  width: 36px; height: 36px; border-radius: 50%; 
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: #111; backdrop-filter: blur(4px);
  transition: all 0.3s ease; z-index: 10;
}
:global(.modal-close-btn:hover) { 
  background: #111; color: #fff; transform: rotate(90deg); 
}

:global(.modal-body-layout) { 
  display: flex; 
  flex-direction: row; 
  position: relative; 
}

/* Columna Izquierda (Imagen Cuadrada Fija) */
:global(.modal-image-col) { 
  width: 50%; 
  aspect-ratio: 1 / 1; 
  display: flex; justify-content: center; align-items: center;
  position: relative; 
  padding: 0; 
  transition: background-color 0.4s ease; 
}

:global(.modal-image-col img) { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  object-position: center;
  z-index: 1; 
  position: relative;
  box-shadow: none; 
  border-radius: 0; 
  display: block; 
}

/* Columna Derecha Distribuida Verticalmente (La magia de Flexbox) */
:global(.modal-info-col) { 
  width: 50%; 
  padding: 24px 32px; /* Reducido para maximizar el área útil */
  
  /* Flexbox se encargará de distribuir el espacio vacío */
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  
  background: linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%);
  position: absolute;
  right: 0; top: 0; bottom: 0;
  
  /* Failsafe si la pantalla es enana */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(17, 17, 17, 0.15) transparent;
}
:global(.modal-info-col::-webkit-scrollbar) { width: 4px; }
:global(.modal-info-col::-webkit-scrollbar-thumb) { background: rgba(17, 17, 17, 0.15); border-radius: 10px; }

/* Sin márgenes fijos para que Flexbox distribuya */
:global(.modal-header-info) { margin-bottom: 0; } 
:global(.collection-row) { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
:global(.modal-collection) { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 800; color: #F47A7A; text-transform: uppercase; letter-spacing: 1.5px; margin: 0;}
:global(.modal-title) { font-family: 'Bernoru', sans-serif; font-size: 36px; color: #111; margin: 0; line-height: 1.05; text-transform: uppercase; letter-spacing: -0.5px;} 
:global(.modal-id-badge) { font-family: 'Montserrat', sans-serif; font-size: 13px; color: #666; font-weight: 700; margin-top: 4px; display: inline-block; background: rgba(17,17,17,0.05); padding: 2px 8px; border-radius: 4px;}

:global(.modal-owner) { display: flex; flex-direction: column; gap: 4px; margin-bottom: 0; margin-top: 12px; } 
:global(.modal-owner > span) { font-family: 'Montserrat', sans-serif; font-size: 10px; color: #888; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;}
:global(.owner-badge.large) { display: inline-flex; align-items: center; gap: 8px; background-color: white; border: 1px solid rgba(17,17,17,0.08); box-shadow: 0 4px 10px rgba(0,0,0,0.02); padding: 5px 12px; border-radius: 30px; width: fit-content; transition: transform 0.2s ease;}
:global(.owner-avatar) { width: 18px; height: 18px; border-radius: 50%; background: linear-gradient(135deg, #111, #F47A7A); }
:global(.owner-address) { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; color: #111; }

/* El contenedor de los traits toma el espacio central */
:global(.modal-traits-section) { 
  flex-grow: 1; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; /* Centra los traits verticalmente en su bloque */
  margin-top: 16px; 
  margin-bottom: 8px;
}
:global(.modal-traits-section h3) { font-family: 'Montserrat', sans-serif; font-size: 12px; color: #888; margin-bottom: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;}

/* MAGIA DE FLEXBOX PARA LOS TRAITS */
:global(.traits-grid) { 
  display: flex; 
  flex-wrap: wrap; 
  gap: 8px; /* Reducido para ahorrar espacio */
}

:global(.trait-box) { 
  flex: 1 1 calc(33.333% - 8px); 
  min-width: 100px; 
  background-color: white; border: 1px solid rgba(17, 17, 17, 0.06); 
  border-radius: 8px; 
  padding: 8px 8px; /* Paddings internos optimizados */
  display: flex; flex-direction: column; 
  gap: 2px; text-align: center; transition: all 0.2s ease;
}
:global(.trait-box:hover) {
  transform: translateY(-2px);
  border-color: #F47A7A;
  box-shadow: 0 4px 12px rgba(244, 122, 122, 0.12);
}
:global(.trait-type) { font-family: 'Montserrat', sans-serif; font-size: 10px; color: #F47A7A; text-transform: uppercase; font-weight: 800;}
:global(.trait-value) { font-family: 'Montserrat', sans-serif; font-size: 13px; color: #111; font-weight: 700; text-transform: capitalize; line-height: 1.1; }
:global(.no-traits) { font-family: 'Montserrat', sans-serif; font-size: 13px; color: #888; font-style: italic; }

:global(.modal-actions) { margin-top: 0; padding-top: 16px; border-top: 1px solid rgba(17,17,17,0.06); }
:global(.btn-opensea) {
  display: flex; justify-content: center; align-items: center; gap: 8px;
  width: 100%; padding: 14px; border-radius: 10px;
  background: #111; color: white; text-decoration: none;
  font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
  transition: all 0.2s ease;
}
:global(.btn-opensea:hover) {
  background: #4E4E4E;
  transform: translateY(-1px);
  box-shadow: 0 8px 16px rgba(244, 122, 122, 0.25);
}

:global(.fade-modal-enter-active), :global(.fade-modal-leave-active) { transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }
:global(.fade-modal-enter-from), :global(.fade-modal-leave-to) { opacity: 0; }
:global(.fade-modal-enter-active .nft-modal-content), :global(.fade-modal-leave-active .nft-modal-content) { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
:global(.fade-modal-enter-from .nft-modal-content), :global(.fade-modal-leave-to .nft-modal-content) { transform: translateY(30px) scale(0.9); }

/* --- RESPONSIVE GENERAL Y MODAL --- */
@media (max-width: 1024px) {
  .gallery-layout { padding: 0 20px 40px 20px; }
  .filters-sidebar { width: 240px; }
  .nft-grid { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); }
  :global(.modal-image-col) { width: 45%; padding: 0;}
  :global(.modal-body-layout) { flex-direction: row; position: static; align-items: stretch; }
  :global(.modal-info-col) { width: 55%; padding: 24px; position: static; height: auto; overflow-y: visible;}
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
    left: 20px;
    z-index: 55;
  }
  
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
  
  :global(.modal-body-layout) { flex-direction: column; max-height: 85vh; overflow-y: auto;}
  :global(.modal-image-col) { width: 100%; padding: 0; aspect-ratio: 1 / 1; height: auto;}
  :global(.modal-info-col) { width: 100%; padding: 24px; border-radius: 20px 20px 0 0; margin-top: -20px; background: #E8E5E6; z-index: 2; position: relative;}
  :global(.modal-title) { font-size: 28px; }
  :global(.trait-box) { flex: 1 1 calc(50% - 12px); } /* En móviles forzamos a máximo 2 columnas */
}

@media (max-width: 600px) {
  .gallery-container {  padding-top: 0; }
  menubttn :deep(.dropbtn) {
    top: 0 !important;
    margin-top: 0 !important;
  }
}
</style>
