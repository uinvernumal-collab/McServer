const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'YOUR_SERVER_IP', // example: play.example.com
  port: 25565,
  username: 'RenderBot'
})

bot.on('spawn', () => {
  console.log('Bot joined the server!')
})

bot.on('end', () => {
  console.log('Bot disconnected. Reconnecting...')
  setTimeout(startBot, 5000)
})

function startBot() {
  mineflayer.createBot({
    host: 'YOUR_SERVER_IP',
    port: 25565,
    username: 'RenderBot'
  })
}
