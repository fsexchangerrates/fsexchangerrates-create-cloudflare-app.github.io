import * as bottender from 'bottender';

import { Line, LineClient } from 'messaging-api-line';

import { 
    Bot,
    LineBot,
    LineConnector,
    LineContext,
    LineEvent,
    LineTypes
 } from 'bottender';

import * as express from 'express';

import { createServer, request, RequestListener, ServerResponse, IncomingMessage } from 'http';

import requestPromise from 'request-promise';

import { LineRequestBody } from 'bottender/dist/line/LineConnector';

import { config } from './config';

var http = require('http');

let port = process.env['port'];

var server = express();

server.listen(port || 3000 , () => {
     console.log('listening on port: ', port)
});

var connector = new LineConnector({
    channelSecret: config['channelSecret'],
    accessToken: config['channelAccessToken']
})

export const callback = Function(http).prototype().onRequest(async (req: IncomingMessage | RequestListener | Request | RequestDestination | RequestInfo, res: Response | ServerResponse) => {
    (req: IncomingMessage) => {}
    
});

class Bot extends LineConnector implements Bot
{
    static config = config;

    public client: LineClient;
    public event: LineEvent;
    public context: LineContext;
    public options: bottender.LineConnector;
    public channelSecret: string;
    public accessToken: string;
    private rawBody: string;
    private signature: string;
    
    /**
     *Creates an instance of Bot.
     * @memberof Bot
     */
    constructor(
        options: bottender.LineConnector
    ) {
        super(options) {
            this._channelSecret = this.channelSecret;
            this.verifySignature = this.verifySignature;
            this._client = this.client;
            
        }
        this.channelSecret = Bot.config['channelSecret'] || Bot.config.channelSecret || '';
        this.accessToken = Bot.config['channelAccessToken'] || Bot.config.channelAccessToken || '';
        this.client = new LineClient(Bot.config);
        this.event = this.event;
    }
}

module.exports = Bot;