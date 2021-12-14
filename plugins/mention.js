let handler = async (m, { conn, text }) => {
  if (!text) throw 'Tidak ada teks'
  let users = text.split(',').map(v => v.replace(/[^0-9]/g, ''))
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <teks>']
handler.tags = ['tools']

handler.command = /^mention$/i

module.exports = handler
