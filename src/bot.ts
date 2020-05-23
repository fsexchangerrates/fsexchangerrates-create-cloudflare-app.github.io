import * as express from 'express';

import * as bottender from 'bottender';

import * as line from 'messaging-api-line';

import { 
    LineBot,
    LineConnector,
    LineContext,
    LineEvent,
    LineTypes
 } from 'bottender';

import { LineClient } from 'messaging-api-line';

import { config } from './config';

class Bot extends bottender.LineBot
{
    public config = config;
    public client: line.LineClient;
    public event: LineEvent;
    public context: LineContext;
    public express = express();
    public port: any;
    public connector: LineConnector;
    public accessToken: string;
    public channelSecret: string;

    public constructor(
        destination,
        accessToken: string,
        channelSecret: string,
        client: line.LineClient, 
        event: LineEvent,
        context: LineContext
    ) {
        super(destination) {
            this._handler = this.handler;
        }
    };

    public function replyMessage(params:type) {
        
    };
}