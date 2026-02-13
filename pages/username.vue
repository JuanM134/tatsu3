<template>
  <div class="background">
    <div class="content-wrapper">
      
      <h1 class="title">ENTER YOUR X [USERNAME]</h1>

      <div class="input-container">
        <input 
          type="text" 
          v-model="username" 
          placeholder="@EXAMPLE" 
          class="x-input"
          @keyup.enter="submitUsername"
        />
      </div>

      <button @click="submitUsername" class="go-btn">
        GO
      </button>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// 1. Importamos el composable de almacenamiento
import { useQuestStorage } from '@/composables/useQuestStorage'

const router = useRouter()
const route = useRoute()

// 2. Extraemos la función para guardar
const { saveLocal } = useQuestStorage()

const username = ref('')

const submitUsername = async () => {
  // A. Limpieza básica
  let cleanUser = username.value.trim()

  if (!cleanUser) {
    return alert('Please enter a username')
  }

  // B. Auto-corrección del @
  if (!cleanUser.startsWith('@')) {
    cleanUser = `@${cleanUser}`
  }

  // Actualizamos la vista por si acaso
  username.value = cleanUser

  try {
    // 3. GUARDAMOS EN LOCALSTORAGE
    // Usamos la clave 'x_username' para que coincida con la columna de Supabase
    saveLocal('x_username', cleanUser)

    console.log(`Username saved locally: ${cleanUser}`)

    // 4. Navegamos a la página de tareas
    await router.push('/tasks')
    
  } catch (error) {
    console.error('Error saving username:', error)
  }
}
</script>

<style scoped>
/* FONDO GENERAL */
.background {
  background-color: #DDD9DA;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.content-wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  z-index: 10;
}

/* TÍTULO */
.title {
  font-family: 'MontSerrat', sans-serif;
  font-weight: 900;
  font-size: 40px;
  color: #0A0101;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin: 0;
}

/* INPUT ESTILIZADO */
.x-input {
  background-color: #0000004D; 
  border: none;
  border-radius: 15px; 
  padding: 15px 30px;
  width: 300px;
  text-align: center;
  
  color: #FFFFFF;
  font-family: 'MontSerrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  outline: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.x-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
}

.x-input:focus {
  transform: scale(1.05);
}

/* BOTÓN GO */
.go-btn {
  background: transparent;
  border: none;
  color: #0A0101;
  font-family: 'MontSerrat', sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  margin-top: 10px;
  opacity: 0.8;
  display: flex; /* Cambiado para centrar el texto "GO" */
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  width: 125px;
  height: 47px;
  border-radius: 15px;
}

.go-btn:hover {
  opacity: 1;
  background-color: #4E4E4E;
  color: #FFFFFF;
}

/* RESPONSIVE */
@media only screen and (max-width: 600px) {
      .background{
    height: 100dvh; 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  .title {
    font-size: 28px;
    padding: 0 20px;
  }
  .x-input {
    width: 250px;
  }
}
</style>
