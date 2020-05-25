import * as line from '@line/bot-sdk';

import * as bottender from 'bottender';

import { config } from '../config';
import { Config } from '@line/bot-sdk';

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
        /**
         *
         *
         * @type {{
         *             channelAccessToken: string,
         *             channelSecret: string
         *         }}
         * @memberof Client
         */
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

    export class Bot 
    {

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
}