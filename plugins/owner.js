let handler = async(m, { conn }) => {
    let msg = await conn.sendContact(m.chat, owner, m)
    await delay(1000)
    await conn.sendMessage(m.chat, { text: `Hallo Kak @${m.sender.split('@')[0]}, *Itu adalah nomor Owner!\n\njangan lupa join: https://chat.whatsapp.com/EFglAMLeHhN1pQ7ASp5LsB`, mentions: [m.sender] }, { quoted: msg })
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
