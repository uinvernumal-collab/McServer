const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'therelax.sdlf.fun', // example: play.example.com
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
    host: 'therelax.sdlf.fun',
    port: 50288,
    username: 'RenderBot'
  })
}
