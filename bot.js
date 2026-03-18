const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: 'node-sg-free-01.tickhosting.com',
    port: 50288,
    username: 'RenderBot'
  })

  bot.on('spawn', () => {
    console.log('Bot joined the server!')

    // Wait a bit before sending commands
    setTimeout(() => {
      bot.chat('/register password password')
      bot.chat('/login password')
    }, 3000)
  })

  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting...')
    setTimeout(startBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })
}

// Start bot first time
startBot()
