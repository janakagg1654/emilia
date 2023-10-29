const {bot} = require('../lib')

function fetchQuotes() {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('https://type.fit/api/quotes')
        const json = await response.json()
        resolve(json)
    })
}

bot(
    {
        pattern: 'quote ?(.*)',
        fromMe: true,
        desc: 'get a random quote',
        type: 'user',
    },
    async (message, match) => {
        const quotes = await fetchQuotes()
        const quote = quotes[Math.floor(Math.random() * quotes.length)]
        return await message.send(quote.text + '\n\n' + quote.author)
    }
)
