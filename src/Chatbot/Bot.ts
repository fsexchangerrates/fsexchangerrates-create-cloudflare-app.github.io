import * as line from '@line/bot-sdk';

import * as bottender from 'bottender';

import { config } from './config';
import { Config } from '@line/bot-sdk';
import { static } from 'express';

export namespace app.Chatbot 
{
    /**
     *
     *
     * @export
     * @interface Client
     * @extends {line.Client}
     */
    export interface Client extends line.Client
    {
        
        config: {
            channelAccessToken: string,
            channelSecret: string
        }
    }

    /**
     *
     *
     * @export
     * @interface Event
     * @extends {line.EventBase}
     */
    export interface Event
    {
        /**
        * @typedef {Event}
        */
        type: Array<{
            message: line.MessageEvent,
            postback: line.PostbackEvent
        }>
    }
}

/**
 * @interface {app.Chatbot.Event}
 */
export class Event implements app.Chatbot.Event
{
    type: Array<{
        message: line.MessageEvent,
        postback: line.PostbackEvent
    }>;
    constructor(type: Array<{
        message: line.MessageEvent,
        postback: line.PostbackEvent
    }>) {
        this.type = type;
    }

    public handler() {
        return {
            type: this.type
        }
    }
}

/**
 *
 *
 * @class Bot
 *
 */
class Bot
{
    public event: Event;
    public client: line.Client;
    context: any;
    public constructor(
        context: any
    ) {
        this.client = new line.Client(config);
        this.event = this.event;
        this.context = context;
    }

    public getPostbackEvent() {
        var postback = this.event.type[postback];
        return postback = {
            type: 'postback',
            data: getData()
        };
    }
}