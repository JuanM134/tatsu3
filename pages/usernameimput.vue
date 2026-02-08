<template>
  <div class="user-container">
    <div class="card">
      <h2>¡Misión: {{ selectedQuestName }}!</h2>
      <p>Para confirmar tu entrada a esta misión, firma con tu nombre de héroe.</p>
      
      <form @submit.prevent="saveUser">
        <div class="input-group">
          <label for="username">Nombre de Usuario</label>
          <input 
            id="username"
            v-model="username" 
            type="text" 
            placeholder="Ej: GuerreroX..." 
            required 
          />
        </div>

        <button type="submit" class="btn-start">Comenzar Aventura</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const selectedQuestName = ref('')

onMounted(() => {
  // 1. Recuperar la misión seleccionada de la "Base de Datos" (LocalStorage)
  const savedQuest = localStorage.getItem('selectedQuest')
  
  if (savedQuest) {
    const questData = JSON.parse(savedQuest)
    selectedQuestName.value = questData.name
  } else {
    // Si no hay misión seleccionada, devolver al inicio
    router.push('/')
  }
})

const saveUser = () => {
  if (!username.value) return;

  // 2. Guardar el usuario junto con la misión
  const finalData = {
    quest: selectedQuestName.value,
    user: username.value,
    timestamp: new Date().toISOString()
  }

  // Aquí es donde enviarías esto a tu Backend real.
  // Por ahora, lo guardamos localmente:
  localStorage.setItem('playerData', JSON.stringify(finalData))
  
  alert(`¡Bienvenido, ${username.value}! Tu aventura comienza ahora.`)
  
  // Opcional: Ir al juego principal
  // router.push('/game')
}
</script>

<style scoped>
.user-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.card {
  background: #2c3e50;
  padding: 2rem;
  border-radius: 15px;
  color: white;
  text-align: center;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0 20px 0;
  border-radius: 5px;
  border: none;
}

.btn-start {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
}

.btn-start:hover {
  background-color: #3aa876;
}
</style>