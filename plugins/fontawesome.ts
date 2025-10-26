import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importa los estilos globales de FontAwesome (¡importante!)
import '@fortawesome/fontawesome-svg-core/styles.css'

// Importa los íconos que usarás
import { 
  faArrowDown, faArrowUp, faArrowLeft, faPlus, faMinus, faEquals, faHouse 
} from '@fortawesome/free-solid-svg-icons'
import { 
  faXTwitter, faDiscord, faInstagram 
} from '@fortawesome/free-brands-svg-icons'

// Evita que FontAwesome inserte CSS automáticamente (Nuxt lo maneja)
config.autoAddCss = false

// Añade los íconos a la librería
library.add(
  faArrowDown, faArrowUp, faArrowLeft, faPlus, faMinus, faEquals,
  faXTwitter as any, faDiscord as any, faInstagram as any, faHouse as any
)

// Registra el componente globalmente
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
