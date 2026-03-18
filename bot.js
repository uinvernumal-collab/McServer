const mineflayer = require('mineflayer')

const PASSWORD = 'TheBotOfTheRelaxTg' // change this

function startBot() {
  const bot = mineflayer.createBot({
    host: 'node-sg-free-01.tickhosting.com',
    port: 50288,
    username: 'RenderBot'
  })

  bot.once('spawn', () => {
    console.log('Bot joined!')

    // Wait a bit for server messages
    setTimeout(() => {
      bot.chat(`/login ${PASSWORD}`)
    }, 3000)
  })

  bot.on('messagestr', (msg) => {
    console.log(msg)

    // If server asks to register
    if (msg.toLowerCase().includes('register')) {
      bot.chat(`/register ${PASSWORD} ${PASSWORD}`)
    }

    // If server asks to login
    if (msg.toLowerCase().includes('login')) {
      bot.chat(`/login ${PASSWORD}`)
    }
  })

  bot.on('end', () => {
    console.log('Disconnected! Reconnecting...')
    setTimeout(startBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })
}

startBot()
