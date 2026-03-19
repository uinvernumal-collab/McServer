const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'TheRelaxTG.exaroton.me', // example: play.example.com
  port: 31451,
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
    host: 'TheRelaxTG.exaroton.me',
    port: 31451,
    username: 'RenderBot'
  })
}
