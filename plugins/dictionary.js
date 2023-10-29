const {bot} = require('../lib');

bot(
    {
        pattern: 'dict ?(.*)',
        fromMe: true,
        desc: 'get meaning of a word',
        type: 'all',
    },
    async (message, match) => {
        if (!match)
            return await message.send('Enter a word')
        const response = await fetch(`https://api.urbandictionary.com/v0/define?term=${match}`)
        const json = await response.json()
        return await message.send(json.list[0].definition)
    }
)