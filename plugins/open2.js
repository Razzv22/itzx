let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, args, text, usedPrefix, DevMode }) => {
	if (!db.data.chats[m.chat].rpg && m.isGroup) throw global.wait
  try {
    let bruh = `${usedPrefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${usedPrefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*mythic*\n*legendary*`
    let _lmao = args[0]
    let Lmao = `Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${usedPrefix}open ${args > 2 ? _lmao : pickRandom(['common', 'uncommon', 'mythic', 'legendary'])} 10*`
    let type = (args[0] || '').toLowerCase()
    const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 4 ? 1 :Math.min(1, count)
    // let jumlah = (args[1] || '').toLowerCase()
    switch (type) {
        case 'common':
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * count)
                    let cc = (_cc * count)
                    let cp = (_cp * count)
                    let ce = (_ce * count)
                    let cu = (_cu * count)
                    let Hcom = `
Anda telah membuka *Common crate* dan mendapatkan:${cm > 0 ? `\nMoney: ${cm}` : ''}${ce > 0 ? `\nExp: ${ce} *exp*` : ''}${cp > 0 ? `\nPotion: ${cp} *potion*` : ''}${cc > 0 ? `\ncommon crate: ${cc} *crate*` : ''}${cu > 0 ? `\nUncommon crate: ${cu} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 1) {
                        global.db.data.users[m.sender].common -= count
                        global.db.data.users[m.sender].money += cm * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].potion += cp * 1
                        global.db.data.users[m.sender].uncommon += cu * 1
                        global.db.data.users[m.sender].common += cc * 1
                        conn.reply(m.chat, Hcom, m)
                    } else conn.reply(m.chat, 'Common crate anda tidak cukup', m)
            break
        case 'uncommon':
                    let _ud = `${Math.floor(Math.random() * 2)}`.trim()
                    let _ue = `${Math.floor(Math.random() * 100)}`.trim()
                    let _um = `${Math.floor(Math.random() * 150)}`.trim()
                    let _up = `${Math.floor(Math.random() * 2)}`.trim()
                    let _umc = `${Math.floor(Math.random() * 1)}`.trim()
                    let _uu = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uc = `${Math.floor(Math.random() * 3)}`.trim()
                    let ud = (_ud * count)
                    let ue = (_ue * count)
                    let um = (_um * count)
                    let up = (_up * count)
                    let umc = (_umc * count)
                    let uu = (_uu * count)
                    let uc = (_uc * count)
                    let Hun = `
Anda telah membuka *Uncommon crate* dan mendapatkan:${um > 0 ? `\nMoney: ${um}` : ''}${ue > 0 ? `\nExp: ${ue} *exp*` : ''}${ud > 0 ? `\nDiamond: ${ud} *diamond*` : ''}${up > 0 ? `\nPotion: ${up} *potion*` : ''}${uc > 0 ? `\nCommon crate: ${uc} *crate*` : ''}${uu > 0 ? `\nUncommon crate: ${uu} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 1) {
                        global.db.data.users[m.sender].uncommon -= count
                        global.db.data.users[m.sender].money += um * 1
                        global.db.data.users[m.sender].diamond += ud * 1
                        global.db.data.users[m.sender].exp += ue * 1
                        global.db.data.users[m.sender].potion += up * 1
                        global.db.data.users[m.sender].common += uc * 1
                        global.db.data.users[m.sender].uncommon += uu * 1
                        conn.reply(m.chat, Hun, m)
                        if (umc > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += umc * 1
                        }
                    } else conn.reply(m.chat, 'Uncommon crate anda tidak cukup', m)
                break
        case 'mythic':
                    let _mm = `${Math.floor(Math.random() * 200)}`.trim()
                    let _mmm = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                    let _me = `${Math.floor(Math.random() * 250)}`.trim()
                    let _mp = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mu = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mc = `${Math.floor(Math.random() * 5)}`.trim()
                    let _ml = `${pickRandom(['0', '0', '1', '0',  '0'])}`.trim()
                    let _md = `${Math.floor(Math.random() * 3)}`.trim()
                    let mm = (_mm * count)
                    let mmm = (_mmm * count)
                    let me = (_me * count)
                    let mp = (_mp * count)
                    let mu = (_mu * count)
                    let mc = (_mc * count)
                    let ml = (_ml * count)
                    let md = (_md * count)
                    let Mychat = `
Anda telah membuka *Mythic crate* dan mendapatkan:${mm > 0 ? `\nMoney: ${mm}` : ''}${me > 0 ? `\nExp: ${me} *exp*` : ''}${md > 0 ? `\nDiamond: ${md} *diamond*` : ''}${mp > 0 ? `\nPotion: ${mp} *potion*` : ''}${mc > 0 ? `\nCommon crate: ${mc} *crate*` : ''}${mu > 0 ? `\nUncommon crate: ${mu} *crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 1) {
                        global.db.data.users[m.sender].mythic -= count
                        global.db.data.users[m.sender].money += mm * 1
                        global.db.data.users[m.sender].diamond += md * 1
                        global.db.data.users[m.sender].exp += me * 1
                        global.db.data.users[m.sender].potion += mp * 1
                        global.db.data.users[m.sender].common += mc * 1
                        global.db.data.users[m.sender].uncommon += mu * 1
                        conn.reply(m.chat, Mychat, m)
                        if (mmm > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += mmm * 1
                        }
                        if (ml > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml} Legendary Crate`)
                            global.db.data.users[m.sender].legendary += ml * 1
                        }
                    } else conn.reply(m.chat, 'Mythic crate anda tidak cukup', m)
            break
        case 'legendary':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _lm = `${Math.floor(Math.random() * 450)}`.trim()
                    let _le = `${Math.floor(Math.random() * 550)}`.trim()
                    let _lp = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lu = `${Math.floor(Math.random() * 7)}`.trim()
                    let _lc = `${Math.floor(Math.random() * 10)}`.trim()
                    let _ll = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                    let _lpp = `${pickRandom(['0', '1', '0'])}`.trim()
                    let _ld = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lmm = `${pickRandom(['0', '1', '0', '1', '0', '0'])}`.trim()
                    let lm = (_lm * 1)
                    let le = (_le * 1)
                    let lp = (_lp * 1) 
                    let lu = (_lu * 1) 
                    let lc = (_lc * 1) 
                    let ll = (_ll * 1) 
                    let lpp = (_lpp * 1)       
                    let ld = (_ld * 1) 
                    let lmm = (_lmm * 1)
                    let Lechat = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm > 0 ? `\nMoney: ${lm}` : ''}${le > 0 ? `\nExp: ${le} *exp*` : ''}${ld > 0 ? `\nDiamond: ${ld} *diamond*` : ''}${lp > 0 ? `\nPotion: ${lp} *potion*` : ''}${lc > 0 ? `\nCommon crate: ${lc} *crate*` : ''}${lu > 0 ? `\nUncommon crate: ${lu} *crate*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 1) {
                        global.db.data.users[m.sender].legendary -= 1
                        global.db.data.users[m.sender].money += lm * 1
                        global.db.data.users[m.sender].diamond += ld * 1
                        global.db.data.users[m.sender].exp += le * 1
                        global.db.data.users[m.sender].potion += lp * 1
                        global.db.data.users[m.sender].common += lc * 1
                        global.db.data.users[m.sender].uncommon += lu * 1
                        conn.reply(m.chat, Lechat, m)
                        if (lmm > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += lmm * 1
                        }
                        if (ll > 0 || lpp > 0) {
                             m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll > 0 ? `\n${ll} Legendary Crate` : ''}${lpp > 0 ? `\n${lpp} Pet Crate` : ''}`)
                            global.db.data.users[m.sender].legendary += ll * 1
                            global.db.data.users[m.sender].pet += lpp * 1
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                case '10':
                    let _lm1 = `${Math.floor(Math.random() * 10000)}`.trim()
                    let _le1 = `${Math.floor(Math.random() * 15000)}`.trim()
                    let _lp1 = `${Math.floor(Math.random() * 30)}`.trim()
                    let _lu1 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _lc1 = `${Math.floor(Math.random() * 75)}`.trim()
                    let _ll1 = `${Math.floor(Math.random() * 2)}`.trim()
                    let _lpp1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _ld1 = `${Math.floor(Math.random() * 16)}`.trim()
                    let _lmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let lm1 = (_lm1 * 1)
                    let le1 = (_le1 * 1)
                    let lp1 = (_lp1 * 1) 
                    let lu1 = (_lu1 * 1) 
                    let lc1 = (_lc1 * 1) 
                    let ll1 = (_ll1 * 1) 
                    let lpp1 = (_lpp1 * 1)       
                    let ld1 = (_ld1 * 1) 
                    let lmm1 = (_lmm1 * 1)
                    let Lechat1 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm1 > 0 ? `\nMoney: ${lm1}` : ''}${le1 > 0 ? `\nExp: ${le1} *exp*` : ''}${ld1 > 0 ? `\nDiamond: ${ld1} *diamond*` : ''}${lp1 > 0 ? `\nPotion: ${lp1} *potion*` : ''}${lc1 > 0 ? `\nCommon crate: ${lc1} *crate*` : ''}${lu1 > 0 ? `\nUncommon crate: ${lu1} *crate*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 10) {
                        global.db.data.users[m.sender].legendary -= 10
                        global.db.data.users[m.sender].money += lm1 * 1
                        global.db.data.users[m.sender].diamond += ld1 * 1
                        global.db.data.users[m.sender].exp += le1 * 1
                        global.db.data.users[m.sender].potion += lp1 * 1
                        global.db.data.users[m.sender].common += lc1 * 1
                        global.db.data.users[m.sender].uncommon += lu1 * 1
                        conn.reply(m.chat, Lechat1, m)
                        if (lmm1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm1} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += lmm1 * 1
                        }
                        if (ll1 > 0 || lpp1 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll1 > 0 ? `\n${ll1} Legendary Crate` : ''}${lpp1 > 0 ? `\n${lpp1} Pet Crate` : ''}`)
                            global.db.data.users[m.sender].legendary += ll1 * 1
                            global.db.data.users[m.sender].pet += lpp1 * 1
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                case '100':
                    let _lm2 = `${Math.floor(Math.random() * 100000)}`.trim()
                    let _le2 = `${Math.floor(Math.random() * 200000)}`.trim()
                    let _lp2 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _lu2 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _lc2 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _ll2 = `${Math.floor(Math.random() * 11)}`.trim()
                    let _lpp2 = `${Math.floor(Math.random() * 51)}`.trim()
                    let _ld2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _lmm2 = `${Math.floor(Math.random() * 11)}`.trim()
                    let lm2 = (_lm2 * 1)
                    let le2 = (_le2 * 1)
                    let lp2 = (_lp2 * 1) 
                    let lu2 = (_lu2 * 1) 
                    let lc2 = (_lc2 * 1) 
                    let ll2 = (_ll2 * 1) 
                    let lpp2 = (_lpp2 * 1)       
                    let ld2 = (_ld2 * 1) 
                    let lmm2 = (_lmm2 * 1)
                    let Lechat2 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm2 > 0 ? `\nMoney: ${lm2}` : ''}${le2 > 0 ? `\nExp: ${le2} *exp*` : ''}${ld2 > 0 ? `\nDiamond: ${ld2} *diamond*` : ''}${lp2 > 0 ? `\nPotion: ${lp2} *potion*` : ''}${lc2 > 0 ? `\nCommon crate: ${lc2} *crate*` : ''}${lu2 > 0 ? `\nUncommon crate: ${lu2} *crate*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 100) {
                        global.db.data.users[m.sender].legendary -= 100
                        global.db.data.users[m.sender].money += lm2 * 1
                        global.db.data.users[m.sender].diamond += ld2 * 1
                        global.db.data.users[m.sender].exp += le2 * 1
                        global.db.data.users[m.sender].potion += lp2 * 1
                        global.db.data.users[m.sender].common += lc2 * 1
                        global.db.data.users[m.sender].uncommon += lu2 * 1
                        conn.reply(m.chat, Lechat2, m)
                        if (lmm2 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm2} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += lmm2 * 1
                        }
                        if (ll2 > 0 || lpp2 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll2 > 0 ? `\n${ll2} Legendary Crate` : ''}${lpp2 > 0 ? `\n${lpp2} Pet Crate` : ''}`)
                            global.db.data.users[m.sender].legendary += ll2 * 1
                            global.db.data.users[m.sender].pet += lpp2 * 1
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                case '1000':
                    let _lm3 = `${Math.floor(Math.random() * 2000000)}`.trim()
                    let _le3 = `${Math.floor(Math.random() * 5000000)}`.trim()
                    let _lp3 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _lu3 = `${Math.floor(Math.random() * 1000)}`.trim()
                    let _lc3 = `${Math.floor(Math.random() * 2500)}`.trim()
                    let _ll3 = `${Math.floor(Math.random() * 51)}`.trim()
                    let _lpp3 = `${Math.floor(Math.random() * 222)}`.trim()
                    let _ld3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _lmm3 = `${Math.floor(Math.random() * 111)}`.trim()
                    let lm3 = (_lm3 * 1)
                    let le3 = (_le3 * 1)
                    let lp3 = (_lp3 * 1) 
                    let lu3 = (_lu3 * 1) 
                    let lc3 = (_lc3 * 1) 
                    let ll3 = (_ll3 * 1) 
                    let lpp3 = (_lpp3 * 1)       
                    let ld3 = (_ld3 * 1) 
                    let lmm3 = (_lmm3 * 1)
                    let Lechat3 = `
Anda telah membuka *Legendary crate* dan mendapatkan:${lm3 > 0 ? `\nMoney: ${lm3}` : ''}${le3 > 0 ? `\nExp: ${le3} *exp*` : ''}${ld3 > 0 ? `\nDiamond: ${ld3} *diamond*` : ''}${lp3 > 0 ? `\nPotion: ${lp3} *potion*` : ''}${lc3 > 0 ? `\nCommon crate: ${lc3} *crate*` : ''}${lu3 > 0 ? `\nUncommon crate: ${lu3} *crate*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 1000) {
                        global.db.data.users[m.sender].legendary -= 1000
                        global.db.data.users[m.sender].money += lm3 * 1
                        global.db.data.users[m.sender].diamond += ld3 * 1
                        global.db.data.users[m.sender].exp += le3 * 1
                        global.db.data.users[m.sender].potion += lp3 * 1
                        global.db.data.users[m.sender].common += lc3 * 1
                        global.db.data.users[m.sender].uncommon += lu3 * 1
                        conn.reply(m.chat, Lechat3, m)
                        if (lmm3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm3} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += lmm3 * 1
                        }
                        if (ll3 > 0 || lpp3 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll3 > 0 ? `\n${ll3} Legendary Crate` : ''}${lpp3 > 0 ? `\n${lpp3} Pet Crate` : ''}`)
                            global.db.data.users[m.sender].legendary += ll3 * 1
                            global.db.data.users[m.sender].pet += lpp3 * 1
                        }
                    } else conn.reply(m.chat, 'Legendary crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'pet':
            let _mknp = pickRandom([1, 2, 1, 5, 3, 2, 1, 2, 4, 1, 3, 5, 2, 4, 3])
            let mknp = (_mknp * 1)
            let kucing = global.db.data.users[m.sender].kucing
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let _pet = `${pickRandom(['kucing', 'rubah', 'kuda'])}`.trim()
            if (global.db.data.users[m.sender].pet > 0) { 
                global.db.data.users[m.sender].pet -= 1
                if (_pet == 'kucing' && kucing > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'kucing' && kucing == 0) {
                    global.db.data.users[m.sender].kucing += 1
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet${_pet} ${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'rubah' && rubah > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'rubah' && rubah == 0) {
                    global.db.data.users[m.sender].rubah += 1
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else if (_pet == 'kuda' && kuda  > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`, m)
                } else if (_pet == 'kuda' && kuda == 0) {
                    global.db.data.users[m.sender].kuda += 1
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                } else {
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    m.reply(pickRandom(['Anda kurang beruntung', 'Coba buka lagi lain kali, karena gk dapet pet', 'kasian gk dapet pet', 'Mungkin lagi gk hoki dan gk dapet pet', 'wkwkkwkwke']) + '. Anda hanya mendapatkan *' + mknp + '* makanan pet')
                }
            } else m.reply('Pet Crate kamu tidak cukup')
            break
        default:
            return conn.reply(m.chat, bruh, m)
    }
  } catch (e) {
      console.log(e)
      conn.reply(m.chat, `${usedPrefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${usedPrefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*mythic*\n*legendary*`, m)
      if (DevMode) {
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
            conn.sendMessage(jid, 'Open.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
        }
    }
  }
}
handler.help = ['open2 <crate>', 'buka2 <crate>']
handler.tags = ['rpg']
handler.command = /^(open2|buka2|gacha2)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
