import * as express from 'express';

import * as bottender from 'bottender';

import * as line from 'messaging-api-line';

import {
    LineBot,
    LineConnector,
    LineContext,
    LineEvent,
    LineTypes,
} from 'bottender';

import { Verify } from 'crypto';

import { Session } from 'inspector';

const { config } = require('./config');

const client = new bottender.LineConnector({
    channelSecret: config.channelSecret,
    accessToken: config.channelAccessToken
});

const event = new bottender.LineEvent;

const initialState = bottender.initializeServer(express.application);

const context = new bottender.LineContext(client, event, Session, initialState);

let port = process.env.PORT;

const server = express()
server.listen(port || 3000, () => {
    console.log('listening on port: '
        `${port}`)
})

server.post('/callbacl', line.Line(config), (req, res) => {
    if (req.body.destination) {
        console.log('Destination User ID: ' + req.body.destination);
    }
    if (!Array.isArray(req.body.events)) {
        console.error('Error', Error);
    }

    Promise.all(req.body.events.map(event => {
        console.log('event', event);
        return handleEvent(event);
    }).then((res) => {
        res.status(200).send('OK').end();
    }).catch((err) => {
        throw new console.Error(err);
    }));
});

const linebot = new bottender.LineBot(config);

const bot = new bottender.Bot(linebot);

async function handleEvent(event, client, c) {

}