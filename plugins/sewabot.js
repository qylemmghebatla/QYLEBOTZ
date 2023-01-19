let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '20'
let sp = '35'
let sv = '40'
//premium
let ph = '5'
let pn = '15'
let pp = '25'
let pv = '35'
let ppm = '35'
//jasa run
let ri = '25'
let pk = '30'
let info = `
𝖖𝖞𝖑𝖊𝖓𝖘𝖊𝖒𝖇𝖔𝖙𝖟
 *• SEWA BOT & UP TO PREMIUM •*
        
╭─「 SEWABOT • 」
│ • Maxis [ 0177302593 ] 
│ • Umobile  [PM OWNER]
│ • Celcom  [PM OWNER]
│ • Digi  [PM OWNER]
╰────
╭─「 *BASIC PRICE* 」
│ > 1 Minggu - RM 3:00 / 4 Group
│ > 3 Minggu - RM 5:00 / 6 Group
│ > Unlimited  - RM 11:00 / Unlimited Group
│ 
╰────
╭─「 *PREMIUM PRICE* 」
│ > 1 Minggu - RM 7:00 / 6 Group
│ > 3 Minggu - RM 9:00 / 10 Group
│ > Unlimited - RM 15:00 / Unlimited Group 
│ 
╰────
wa.me/60177302593
*Bukan Bot!!!*
*Owner 𝖖𝖞𝖑𝖊𝖓𝖘𝖊𝖒𝖇𝖔𝖙𝖟*
༅ _*FITUR BOT*

✧ *Group Menu✅*
✧ *Menu Keren✅*
✧ *Anti Link✅*
✧ *Button Menu✅*
✧ *Anti Sticker✅*
✧ *Anti Toxic↗️*
✧ *DLL*
✧ *MEMBELI BERATI SETUJU*

_Total Fitur:_ 570++

*⫹⫺ PAYMENT:*
• *Maxis:*
• *Celcom:*
• *Digi:*
• *TnG*
• *ALL PAYMENT*
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* 5K • Sewa', description: 'PRICE: ' + sh + 'k (7 Hari)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* 10K • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 Permanen", rowId: '.order *Paket:* 40K • Sewa', description: 'PRICE: ' + sv + 'k (Permanen)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* 5K • Premium', description: 'PRICE: ' + ph + 'k (7 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* 10K • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* 35K • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    }, {
        title: `${htjava} JASA RUN ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* 25K • Jasarun', description: 'PRICE: ' + ri + 'k (25 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* 30K • Jasarun', description: 'PRICE: ' + pk + 'k (1 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
