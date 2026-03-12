<template>
  <div class="background">
    <navbar style="z-index: 4;" />

    <Dropupbttn class="dropupbttn" style="z-index: 4; top: 88.5%;" />
    <home class="dropupbttn" style="z-index: 5; position: fixed;" />
    <menubttn style="z-index: 6;" />
    <navbar2 style="z-index: 11;" />

    <p class="title">WALLET CHECKER</p>

    <!-- WALLET SECTION -->
    <div class="wallet-section">

      <button class="connect-btn" @click="connectWallet">
        Connect Wallet
      </button>

      <p v-if="walletAddress" class="wallet">
        Connected: {{ shortAddress }}
      </p>

      <p v-if="wlStatus" class="wl-status">
        {{ wlStatus }}
      </p>

    </div>

  </div>
</template>

<script setup lang="ts">

import { ref, computed, onMounted } from "vue"
import { ethers } from "ethers"

import { useLoading } from '@/composables/useLoading'
import { useAssetLoading } from '@/composables/useAssetLoading'

import wlList from '@/data/wl.json'

const { startLoading, stopLoading } = useLoading()
const { waitForFonts } = useAssetLoading()

const walletAddress = ref<string | null>(null)
const wlStatus = ref("")

const shortAddress = computed(() => {

  if(!walletAddress.value) return ""

  return walletAddress.value.slice(0,6) + "..." + walletAddress.value.slice(-4)

})

onMounted(async () => {

  startLoading()

  await waitForFonts()

  stopLoading()

})

async function connectWallet(){

  try{

    if(!(window as any).ethereum){

      alert("Please install MetaMask")

      return

    }

    const provider = new ethers.BrowserProvider((window as any).ethereum)

    await provider.send("eth_requestAccounts", [])

    const signer = await provider.getSigner()

    walletAddress.value = await signer.getAddress()

    checkWhitelist()

  }catch(err){

    console.error(err)

  }

}

function checkWhitelist(){

  if(!walletAddress.value) return

  const address = walletAddress.value.toLowerCase()

  if(wlList.includes(address)){

    wlStatus.value = "WL GTD — 1 mint guaranteed"

  }else{

    wlStatus.value = "Not on whitelist — wait for public mint"

  }

}

</script>

<style scoped>

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
}

.title {
  color: #0A0101;
  font-size: 100px;
  font-family: 'MontSerrat';
  font-weight: 900;
  line-height: 102px;
  top: 40%;
  text-align: center;
  width: 100%;
  position: absolute;
}

/* WALLET SECTION */

.wallet-section{

  position:absolute;
  top:60%;
  width:100%;
  text-align:center;

}

.connect-btn{

  padding:14px 30px;
  font-size:16px;
  font-family:'MontSerrat';
  font-weight:700;
  border:none;
  background:black;
  color:white;
  cursor:pointer;
  transition:0.2s;

}

.connect-btn:hover{

  transform:scale(1.05);

}

.wallet{

  margin-top:15px;

  font-family:IMBPlexMono;

  font-size:14px;

}

.wl-status{

  margin-top:10px;

  font-family:IMBPlexMono;

  font-size:14px;

}

/* MOBILE */

@media only screen and (max-width: 600px) and (max-height: 933px){

.navbar{
display:none;
}

.title{

  position:absolute;
  font-size:2rem;
  top:50%;
  text-align:center;
  width:100%;

}

.dropupbttn{

  display:none;

}

.navbar2{

  display:block;

}

.background{

  display:flex;
  flex-direction:column;

}

.wallet-section{

  top:65%;

}

}

</style>