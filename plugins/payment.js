import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `
╭─「 • *Pulsa* • 」
│ • *IM3* ${pay.pulsa}
╰─────

╭─「 • *E-wallet* • 」
│ • *Dana:* Hubungi Own / Scan Qris diatas
│ • *Gopay:* Hubungi Own / Scan Qris diatas
│ • *Ovo:* Hubungi Own / Scan Qris diatas
╰─────

◛˖ _*Jika sudah membayar*_\n_*silahkan kirim bukti pembayaran ke owner bot agar segera dikonfirmasi...*_`
await conn.sendFile(m.chat, fs.readFileSync('./media/qris.jpg'), 'qris.jpg', payi, m)
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
export default handler
