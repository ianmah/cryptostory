  
const WEBHOOK_URL = 'localhost:1337/'

const initWebsocket = () => {
  console.log('Websocket inited')
//   window.ws = new WebSocket(`wss://${WEBHOOK_URL}`)
  window.ws = new WebSocket(`ws://${WEBHOOK_URL}`)
  const ws = window.ws
  
  ws.onopen = () => {
    ws.send(JSON.stringify({ message: 'Someone joined' }))
    console.log('Websocket connected')
  }

  return ws
}

export default initWebsocket