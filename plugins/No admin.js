const { bot, isAdmin } = require('../lib/')


// {
// 	pattern: 'non_admin ?(.*)',
// 	fromMe: true,
// 	desc: '',
// 	type: 'whatsapp',
// },
bot({ on: 'text', fromMe: false, type: 'grouphek' }, async (message) => {
	if(!message.isGroup) return 
        const meta = await message.groupMetadata(message.jid, true)
	if (!meta.announce) return
        const isIAdmin = await isAdmin(meta.participants, message.client.user.jid)
	if (!isIAdmin) return
	const isImAdmin = await isAdmin(meta.participants, message.participant)
	if (isImAdmin) return
	return await message.Kick(message.participant)
}
