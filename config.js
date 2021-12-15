// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://chat.whatsapp.com/LUeaIB2X4aJLshtsIRjwuG'
gc2 = 'https://chat.whatsapp.com/HJ9pD2XJ8vq7whuAYOvT1Y'
gc3 = 'https://chat.whatsapp.com/LUeaIB2X4aJLshtsIRjwuG'
global.linkGC = ['https://chat.whatsapp.com/HJ9pD2XJ8vq7whuAYOvT1Y'] // 
global.owner = ['6282143610893','6282143610893'] // Put your number here //owner eval
global.kontak = ['6282143610893','6282143610893'] //Ketika ada yang ngetik #owner
global.mods = ['6282143610893','6282143610893'] // Want some help?
global.prems = ['6281326635396','628885960825'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bg: 'http://bochil.ddns.net',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  amel: 'https://melcanz.com',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': '057f32b5931c3bce',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://melcanz.com': '8EUmENAQ',
}

namaig = 'instagram.com/akmall.prdnz'
namagithub = 'github.com/Akmall-236'
kasihcaption = 'Nihh bang...'
namakontak1 = 'Akmalz'
namakontak2 = ''

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'RazzBot' // 
global.author = `
\"aboutMe\": {
       \"name\": \"Lord Razz\", 
       \"age\": \"15\", 
       \"status\": \"student\"
},
\"sosmed\": { 
       \"ig\": \"@gaadaorang_01\", 
       \"github\": \"Razzv22\",
       \"waNumber\": [\"6282143610893\",\"6282143610893\"]
}

// Kmtl bapack mu pecah` // ganti aja

//yyy
bc = 'Lord Razz'
footer = '\nIG : @gaadaorang_01'
namabot = 'Lord Razz'
namalu = 'Razz'


// 
wait = 'Mohon tunggu....'
global.wait = 'Mohon tunggu, sedang diproses...'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = 'Maaf, server sedang error'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 100 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
