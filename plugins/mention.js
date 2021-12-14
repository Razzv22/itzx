let handler = async (m, { conn, text }) => {
  if (!text) throw 'Tidak ada teks'
  let men = text.split(',').map(v => v.replace(/[^0-9]/g, ''))
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(men)
    }
  })
}
handler.help = ['mention <teks>']
handler.tags = ['tools']

handler.command = /^mention$/i

module.exports = handler
