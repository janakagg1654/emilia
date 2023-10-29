
const {bot, jid} = require('../lib')
bot(
    {
        pattern: 'dp ?(.*)',
        fromMe: true,
        desc: 'change dp',
        type: 'whatsapp',
    },
    async (message, match) => {
        if (match.toLowerCase() === 'remove') {
            await message.updateProfilePicture('media\\remove.jpg', message.jid); 
            return await message.send('_dp Removed_');
        }
        if (!message.reply_message ||!message.reply_message.image)
        return await message.send('*Reply to a image.*');
    
        await message.updateProfilePicture(
            await message.reply_message.downloadMediaMessage(),
            message.jid
        );
        return await message.send('_Profile Picture Updated_');
    }


)
