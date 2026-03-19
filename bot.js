const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '88.198.230.2', // example: play.example.com
  port: 2376,
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
    host: '88.198.230.2',
    port: 2376,
    username: 'RenderBot'
  })
}
