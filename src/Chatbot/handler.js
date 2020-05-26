Object.defineProperty(exports, '_esModules', { value: true });

const line = require('@line/bot-sdk');

const { config } = require('./config');

const client = new line.Client(config);

let richMenuId1 = 'kkkkkkkk';

let richMenuId2 = 'hhhhhhhhhh';

const { flexMessage } = require('./flexMessage');

async function handler(event) {
    if (event.replyToken && event.replyToken.match(/^(\*)/i)) {
        console.log("Recieve from: " + event.replyToken, "message: "
            `${JSON.stringify(event.message)}`)
    }

    switch (event.type) {
        case 'message':
            const { message } = event;
            switch (message.type) {
                case 'text':
                    await client.replyMessage(event.replyToken, message.text);
                    break;
                default:
                    throw new console.Error('Unsupport message type: ', `${JSON.stringify(message.type)}`);
            };
            break;
        case 'postback':
            let { data } = event.postback;
            switch (data) {
                case 'nextMenu':
                    return await client.linkRichMenuToUser(event.source.userId, `${richMenuId2}`);
                case 'previos':
                    return await client.linkRichMenuToUser(event.source.userId, `${richMenuId1}`);
                case 'greeting':
                    return await client.replyMessage(event.replyToken, flexMessage.greeting);
                default:
                    return console.log(`Got postback data ${data}`);
            }
        default:
            throw new Error("Unknow event: ", `${JSON.stringify(event.message)}`);

    }
}

module.exports.handler = handler;