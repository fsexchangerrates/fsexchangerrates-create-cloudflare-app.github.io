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
import http, { createServer, request } from 'http'

 let router = express();

 let port = process.env['port'];

 var server = http.createServer(router)
 server.listen(port || 3000 , () => {
     console.log('listening on port: ', port)
 })

 var connector = new LineConnector({
    channelSecret: config['channelSecret'],
    accessToken: config['channelAccessToken']
})
 