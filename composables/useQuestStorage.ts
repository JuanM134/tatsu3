// composables/useQuestStorage.ts
export const useQuestStorage = () => {
  
  // Guardar un paso individual en la mochila
  const saveLocal = (key: string, value: string) => {
    if(!value) return;
    localStorage.setItem(`dragon_quest_${key}`, value);
  }

  // Obtener todos los datos listos para enviar a Supabase
  const getPayload = () => {
    return {
      team_id: localStorage.getItem('dragon_quest_team_id') || null, // Columna: team_id
      x_username: localStorage.getItem('dragon_quest_x_username') || null, // Columna: x_username
      repost_link: localStorage.getItem('dragon_quest_repost_link') || null, // Columna: repost_link
      comment_link: localStorage.getItem('dragon_quest_comment_link') || null, // Columna: comment_link
      user_agent: navigator.userAgent, // Columna: user_agent (Lo sacamos del navegador)
      // ip_address: Para esto necesitarías una Cloud Function, lo dejaremos NULL por ahora desde el front
    }
  }

  return { saveLocal, getPayload }
}