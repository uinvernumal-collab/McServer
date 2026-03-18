const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'node-sg-free-01.tickhosting.com', // example: play.example.com
  port: 50288,
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
    host: 'node-sg-free-01.tickhosting.com',
    port: 50288,
    username: 'RenderBot'
  })
}
