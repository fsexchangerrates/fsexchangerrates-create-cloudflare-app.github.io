Object.defineProperty(exports, '_esModules', { value: true });

const line = require('@line/bot-sdk');

const { config } = require('./config');

const client = new line.Client(config);

let richMenuId1 = 'kkkkkkkk';

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
            if (data === 'nextmenu') {
                return await client.linkRichMenuToUser(event.source.userId, `${richMenuId1}`);
            };
            break;
        default:
            throw new Error("Unknow event: ", `${JSON.stringify(event.message)}`);

    }
}

module.exports.handler = handler;