/**
    * Created By AdrianTzy
    * Mau Recode? Simpen Nama Gw!!!!
    * Hapus Credit Masuk Neraka Paling Bawah
*/
const fs = require('fs')
const chalk = require('chalk')

// Gak Usah Di Ganti
global.apikey = 'APOLOZEA' // https://api.lolhuman.xyz
global.rosekey = 'cba86fac49e37d63f9bd4561' // https://api.itsrose.site

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'sathan-MD'
global.namaowner = 'oshada'

//—————「 Setting Owner 」—————//
global.owner = '94703698781'
global.nomerowner = ["94703698781"]
global.premium = ['6289513081052']

//—————「 Set Wm 」—————//
global.packname = 'oshada-MD'
global.author = 'V1.2'
global.isLink = 'https://chat.whatsapp.com/DRCrPjhkaOXcZ9tXbx2raQ10'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 10000,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/54bdfdfaeadbda3984b82.jpg'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
