console.log('SUPABASE_URL:', process.env.SUPABASE_URL)
console.log('SUPABASE_KEY:', process.env.SUPABASE_ANON_KEY?.slice(0, 10))


import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const supabase = await serverSupabaseClient(event)

  if (!body.teamId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'teamId requerido'
    })
  }

  const headers = getHeaders(event)

  const { error } = await supabase
    .from('team_selections')
    .insert({
      team_id: body.teamId,
      ip_address:
        headers['x-forwarded-for'] ||
        event.node.req.socket.remoteAddress,
      user_agent: headers['user-agent']
    })

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    })
  }

  return { success: true }
})

