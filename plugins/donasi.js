let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
*Donasi • Emoney - Pulsa* ´ˎ˗
✎ PULSA : +62 813-2663-5396
✎ Dana / ~Ovo~ / Gopay : +62 888-5960-825
✎ Bila Perlu hubungi owner 
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
