import * as bottender from 'bottender'

import { Line, LineClient } from 'messaging-api-line'

import { 
    Bot,
    LineBot,
    LineConnector,
    LineContext,
    LineEvent,
    LineTypes
 } from 'bottender'

import * as express from 'express'

import { config } from './config'
import { createServer, request, RequestListener, ServerResponse, IncomingMessage } from 'http'
import requestPromise from 'request-promise'
import { LineRequestBody } from 'bottender/dist/line/LineConnector'

var http = require('http')

 var router = express();

 let port = process.env['port'];

 var server = createServer(router).listen(port || 3000 , () => {
     console.log('listening on port: ', port)
 })

 var connector = new bottender.LineConnector({
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
    
    /**
     *Creates an instance of Bot.
     * @memberof Bot
     */
    constructor(options: bottender.LineConnector ) {
        
        super(options) {
            this._channelSecret
        }
    }
}

module.exports = Bot;