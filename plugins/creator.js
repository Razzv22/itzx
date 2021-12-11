function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  this.sendContact(m.chat, kontak[0], 'Akmalz', m)
  this.sendContact(m.chat, kontak[1], 'Bot BETA 24 Jam', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
