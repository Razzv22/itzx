console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let os = require('os')
let package = require('./package.json')
const CFonts  = require('cfonts')
CFonts.say('Rpg\nWhatsApp Bot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`'${package.name}' By @${package.author.name || package.author}\nRPG-BOT ver 1.5.0\nRecode By Dawnfrost & Akmalz`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

sayH = `Owner Name : ${namakontak1}\nOwner List : ${owner}\nHostname : ${os.hostname()}\nPlatform : ${os.hostname()}\nCPU :\n   Model : ${JSON.stringify(os.cpus()[0].model)}\n   Speed : ${JSON.stringify(os.cpus()[0].speed)}`
console.log(sayH)

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  // console.log(p)
}

start('main.js')
