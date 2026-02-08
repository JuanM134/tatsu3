<template>
  <div class="background-container">
    <video autoplay muted loop playsinline class="bg-video">
      <source src="@/assets/videos/questdragon.mp4" type="video/mp4" />
      Tu navegador no soporta videos.
    </video>

    <div class="overlay"></div>

    <div class="task-card">
      <h2 class="task-title">COMPLETE THESE TASKS</h2>

      <div class="tasks-list">
        <div class="task-item">
          <p>Follow @tatsu_nyc and turn on notifications</p>
          <a 
            href="https://x.com/tatsu_nyc" 
            target="_blank" 
            class="go-link"
            @click="markGo('follow')"
          >GO</a>
        </div>

        <div class="task-item">
          <p>Like pinned post</p>
          <a 
            href="https://x.com/tatsu_nyc/status/1994813610967564788" 
            target="_blank" 
            class="go-link"
            @click="markGo('like')"
          >GO</a>
        </div>

        <div class="task-item complex">
          <div class="task-row">
            <p>Quote with a good caption adding "Become the dragon"</p>
            <a 
              href="https://x.com/tatsu_nyc" 
              target="_blank" 
              class="go-link"
            >GO</a>
          </div>
          <input 
            type="text" 
            v-model="repostLink" 
            placeholder="PASTE REPOST LINK" 
            class="link-input"
            :class="{ 'input-error': hasError && !isValidUrl(repostLink) }"
          />
        </div>

        <div class="task-item complex">
          <div class="task-row">
            <p>Tag two friends in comments</p>
            <a 
              href="https://x.com/tatsu_nyc/status/1994813610967564788" 
              target="_blank" 
              class="go-link"
            >GO</a>
          </div>
          <input 
            type="text" 
            v-model="commentLink" 
            placeholder="PASTE COMMENT LINK" 
            class="link-input"
            :class="{ 'input-error': hasError && !isValidUrl(commentLink) }"
          />
        </div>
      </div>

      <div class="nav-footer">
        <button @click="$router.back()" class="nav-btn">BACK</button>
        <button 
          @click="verifyAndNext" 
          class="nav-btn next" 
          :class="{ active: isComplete }"
        >
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useQuestStorage } from '@/composables/useQuestStorage'

const supabase = useSupabaseClient()
const router = useRouter()
const { saveLocal, getPayload } = useQuestStorage()

const repostLink = ref('')
const commentLink = ref('')
const hasError = ref(false) // Para pintar los inputs de rojo si fallan

// Solo rastreamos los 2 primeros botones obligatorios
const clickedButtons = reactive({
  follow: false,
  like: false
})

const markGo = (task: keyof typeof clickedButtons) => {
  clickedButtons[task] = true
}

// --- LÓGICA DE VALIDACIÓN DE LINKS (REGEX) ---
// Esta expresión busca: x.com o twitter.com + usuario + /status/ + numeros
const linkPattern = /https?:\/\/(www\.)?(x\.com|twitter\.com)\/[a-zA-Z0-9_]+\/status\/[0-9]+/

const isValidUrl = (url: string) => {
  return linkPattern.test(url.trim())
}

// Estado visual del botón (Verde si todo está OK)
const isComplete = computed(() => {
  const buttonsOk = clickedButtons.follow && clickedButtons.like
  const linksOk = isValidUrl(repostLink.value) && isValidUrl(commentLink.value)
  return buttonsOk && linksOk
})

// --- FUNCIÓN PRINCIPAL ---
const verifyAndNext = async () => {
  // 1. Resetear errores visuales
  hasError.value = false

  // 2. Validar Botones
  if (!clickedButtons.follow || !clickedButtons.like) {
    return alert('Please click the first two "GO" buttons (Follow & Like) before proceeding.')
  }

  // 3. Validar Estructura de Links (Aquí está la notificación que pediste)
  if (!isValidUrl(repostLink.value)) {
    hasError.value = true
    return alert('Invalid Repost Link. Please paste a valid X post link (e.g., x.com/user/status/123...).')
  }

  if (!isValidUrl(commentLink.value)) {
    hasError.value = true
    return alert('Invalid Comment Link. Please paste a valid X comment link.')
  }

  // 4. Si todo está bien, enviamos a Supabase
  try {
    saveLocal('repost_link', repostLink.value)
    saveLocal('comment_link', commentLink.value)

    const finalPayload = getPayload()
    console.log('Enviando a Supabase:', finalPayload)

    const { error } = await supabase
      .from('team_selections') 
      .insert([ finalPayload ])

    if (error) throw error

    await router.push('/final-step')

  } catch (error: any) {
    console.error('Error detallado de Supabase:', error)
    alert(`Error saving: ${error.message || 'Unknown error'}`)
  }
}
</script>

<style scoped>
.background-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: center; 
  z-index: -2;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: -1;
}

.task-card {
  background-color: rgba(146, 146, 146, 0.85);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  width: 580px;
  padding: 40px;
  z-index: 10;
}

.task-title {
  font-family: 'MontSerrat', sans-serif;
  font-weight: 900;
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
  color: #0A0101;
}

.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.task-item, .task-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.task-item p, .task-row p {
  font-family: 'MontSerrat', sans-serif;
  font-weight: 500;
  font-size: 15px;
  margin: 0;
  line-height: 1.2;
  flex: 1;
}

.complex {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.go-link {
  background: transparent;
  color: #0A0101;
  font-family: 'MontSerrat', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  width: 100px;
  height: 40px;
  border-radius: 12px;
  text-decoration: none;
  flex-shrink: 0;
}

.go-link:hover {
  background-color: #4E4E4E;
  color: #FFFFFF;
}

.link-input {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  color: white;
  font-size: 12px;
  font-family: 'MontSerrat', sans-serif;
  outline: none;
  border: 1px solid transparent; /* Para evitar saltos al poner borde rojo */
  transition: border-color 0.3s;
}

/* CLASE NUEVA: Input con error */
.input-error {
  border: 1px solid #ff4444;
  background-color: rgba(50, 0, 0, 0.6);
}

.nav-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.nav-btn {
  background: transparent;
  border: none;
  font-family: 'MontSerrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 2px;
  color: #0A0101;
}

.next {
  opacity: 0.3;
  transition: all 0.3s ease;
  /* IMPORTANTE: Quitamos pointer-events: none para permitir el click y mostrar el error */
  cursor: pointer;
}

.next.active {
  opacity: 1;
  /* Cuando está activo, sigue siendo clickeable */
}

@media (max-width: 600px) {
  .task-card { width: 95%; padding: 20px; }
  .go-link { width: 80px; font-size: 14px; }
}
</style>
