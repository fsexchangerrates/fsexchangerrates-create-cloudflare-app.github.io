const text = require('../template/text');

const flex = require('./../template/flex')

const flow = require('../dialog/basic');

function handleMessage(client, event, baseURL) {
    let pesan = event.message.text
    let userId = event.source.userId
    let replyToken = event.replyToken
    let split_space = pesan.split(' ')

    if (event.message.type == 'text') {
        if (pesan == "menu") {
            return client.replyMessage(replyToken, text.menu)

        } else {
            return flow.mainFlow(client, userId, event.replyToken, pesan)
        }

    }

    const sample = {
        "type": "text",
        "text": "example"
    }
    return client.replyMessage(event.replyToken, flex.greeting)
}

module.exports = handleMessage