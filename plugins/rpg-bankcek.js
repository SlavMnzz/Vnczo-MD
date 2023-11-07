import fs from "fs"
let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
    if (!(who in global.db.data.users)) return m.reply(`ᴜsᴇʀ ${who} ɴᴏᴛ ɪɴ ᴅᴀᴛᴀʙᴀsᴇ`)
    let user = global.db.data.users[who]
    const caption = `
▧「 *ʙᴀɴᴋ ᴄᴇᴋ* 」
│ 👤 ɴᴀᴍᴇ: ${user.registered ? user.name: conn.getName(m.sender)}
│ ${rpg.emoticon('atm')} ᴀᴛᴍ: ${user.atm > 0 ? 'Level ' + user.atm: '✖️'}
│ ${rpg.emoticon('bank')} ʙᴀɴᴋ: ${user.bank} / ${user.fullatm}
│ ${rpg.emoticon('money')} ᴍᴏɴᴇʏ: ${user.money}
│ ${rpg.emoticon('chip')} ᴄʜɪᴘ: ${user.chip}
│ 🤖 ʀᴏʙᴏ: ${user.robo > 0 ? 'Level ' + user.robo: '✖️'}
│ 🌟 sᴛᴀᴛᴜs: ${who.split`@`[0] == info.nomorown ? 'Developer': user.premiumTime >= 1 ? 'Premium User': user.level >= 1000 ? 'Elite User': 'Free User'}
│ 📑 ʀᴇɢɪsᴛᴇʀᴇᴅ: ${user.registered ? 'Yes': 'No'}
└────···
`.trim()
    await conn.adReply(m.chat, caption, '', '', fs.readFileSync('./media/bank.jpg'), '', m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^bank$/i

handler.register = true
handler.group = true
handler.rpg = true

export default handler