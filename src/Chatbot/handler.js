import * as line from '@line/bot-sdk';

Object.defineProperty(exports, '_esModules', { value: true });

const { config } = require('./config');

const client = new line.Client(config);

async function handler(event) {
    if (event.replyToken && event.replyToken.match(/^(\*)/i)) {
        console.log("Recieve from: " + event.replyToken, "message: "
            `${JSON.stringify(event.message)}`)
    }
}

module.exports.handler = handler;