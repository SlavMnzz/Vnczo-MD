const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender]
  let all = command.replace(/^tarik/i, '')
  let count = all ? all : args[0]
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('🇬🇧 : ʏᴏᴜ ᴅᴏɴᴛ ʜᴀᴠᴇ ᴀɴ ᴀᴛᴍ ᴄᴀʀᴅ ʏᴇᴛ\n🇮🇩 : ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴍᴇᴍɪʟɪᴋɪ ᴀᴛᴍ')
  if (user.bank > user.fullatm) return m.reply('🇬🇧 : ᴛʜᴇ ᴀᴛᴍ ɪs ғᴜʟʟ ᴏғ ᴍᴏɴᴇʏ\n🇮🇩 : ᴜᴀɴɢ ᴅɪ ᴀᴛᴍ sᴜᴅᴀʜ ᴘᴇɴᴜʜ')
  if (count > user.fullatm - user.bank) return m.reply('🇬🇧 : ᴛʜᴇ ᴍᴏɴᴇʏ ʜᴀs ʀᴇᴀᴄʜᴇᴅ ɪᴛs ʟɪᴍɪᴛ\n🇮🇩 : ᴜᴀɴɢɴʏᴀ sᴜᴅᴀʜ ᴍᴇɴᴄᴀᴘᴀɪ ʙᴀᴛᴀs')
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `sᴜᴋsᴇs ᴍᴇɴᴀʙᴜɴɢ sᴇʙᴇsᴀʀ ${count} ᴍᴏɴᴇʏ 💹`, m)
  } else conn.reply(m.chat, `[❗] ᴜᴀɴɢ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴍᴇɴᴄᴜᴋᴜᴘɪ ᴜɴᴛᴜᴋ ᴍᴇɴᴀʙᴜɴɢ ${count} ᴍᴏɴᴇʏ 💹`, m)
}
handler.help = ['atm <jumlah>']
handler.tags = ['rpg']
handler.command = /^atm([0-9]+)|atm|atmall$/i
handler.rpg = true
handler.group = true
export default handler