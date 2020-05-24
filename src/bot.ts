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

import { LineRawEvent } from 'bottender/dist/line/LineEvent';

import { config } from './config';

export class PostbackEvent extends LineEvent
{
    public line: LineConnector;
    public options: any;
    public data?: string;
    public constructor( 
        line: LineConnector, 
        rawEvent: LineRawEvent, 
        data?: string
    ) {
        super(rawEvent) {
            this._rawEvent = this.rawEvent;
        }
        this.line = new LineConnector(this.options);
        this.data = data;
    }

    /**
     * @return string
     */
    getData() {
        return this.data = this.data;
    };
}

export class FollowEvent extends LineEvent
{

}

/**
 *
 *
 * @export
 * @class Event
 * @extends {LineEvent}
 * @returns {Event}
 */
export class Event extends LineEvent
{
    static RICH_MENU_ID_ONE = 'kkkkkkkk';
    static RICH_MENU_ID_TWO= 'uuuuuuuuu';

    public event: LineEvent ;
    public postbackEvent: PostbackEvent;

    public constructor(rawEvent, event: LineEvent) {
        super(rawEvent){
            this._destination = this.destination;
            this._rawEvent = rawEvent;
        }
        this.event = event;
        this.postbackEvent = this.postbackEvent;
    }

    async handler(event: Event['event']) {
        let replyToken: string = await event.replyToken;
        let userId: string = await event.source.userId;
        

        switch (event) {
            case this.postbackEvent || 'postback':
                let data: string = event.postback.data;
                if (data === 'Nextmenu') {
                    await 
                }
        }

        return {

        };
    }
}

export class HandleContext extends LineContext
{
    public function name(params:type) {
        
    }
}

export class Bot extends bottender.LineBot
{
    public config: any;
    public client: line.LineClient;
    public event: LineEvent;
    public context: LineContext;
    public express = express();
    public port: any;
    public connector: LineConnector;
    public accessToken: string;
    public channelSecret: string;
    public rawEvent: LineRawEvent;
    public postbackEvent: PostbackEvent;

    public constructor(
        destination: any,
        accessToken: string,
        channelSecret: string,
        client: line.LineClient, 
        event: LineEvent,
        context: LineContext
    ) {
        super(destination)
        this.accessToken = accessToken;
        this.channelSecret = channelSecret;
        this.client = new line.LineClient({
            accessToken: this.accessToken,
            channelSecret: this.channelSecret
        });
        
        this.event = event;
        this.context = context;
    }

    async linkRichMenu(userId?: string, richMenuId?: string) {
        var client = this.client(config)
        return await new bottender.LineConnector(client)._client.linkRichMenu(userId, richMenuId);
    }

}