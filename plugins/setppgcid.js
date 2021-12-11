let handler = async (m, { conn, usedPrefix, command, text }) => {
    // if (!text) return text = ``
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Gambar tidak ditemukan'
        await conn.updateProfilePicture(text, img)
    } else throw `kirim/balas gambar dengan caption *${usedPrefix + command}*`
}

handler.command = /^setppgcid$/i

module.exports = handler
