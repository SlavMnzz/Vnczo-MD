let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = ` ---『 *LIST HARGA* 』---
❏──「 *Sewa Bot* 」
│ • *1 Minggu:* Rp.2.000
│ • *2 Minggu:* Rp.5.000
│ • *1 Bulan:* Rp.15.000
│ • *Permanen:* Rp.30.000
❏──────────────๑
❏──「 *Premium* 」
│ • *1 Minggu:* Rp.1.000
│ • *2 Minggu:* Rp.3.000
│ • *1 Bulan:* Rp.6.000
│ • *Permanen:* Rp.15.000
❏──────────────๑
*Premium itu hanya akses fitur premium saja kak seperti hdr, remini dll dan tidak bisa di masukkan ke grup*

_Sewa bot bisa bisa memasukkan bot ke grup dan mendapatkan premium jadi bisa akses fitur premium di bot_
❏──「 *Pembayaran* 」
│ • *Ovo:* Hub owner
│ • *Dana:* Hub owner
│ • *Qris:* Hub owner
❏──────────────๑
│ Hubungi Owner!!!
│wa.me/62857059457518
❏──────────────๑
 _2023 © Vnczo-MD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menuprem']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|prem)$/i

export default handler