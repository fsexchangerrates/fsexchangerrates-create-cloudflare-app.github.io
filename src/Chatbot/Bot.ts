import * as line from '@line/bot-sdk';

import * as bottender from 'bottender';

import { config } from './config';

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
     * 
     */
    export interface Event
    {
        /**
        * @typedef {Event}
        */
        type : Array<{
            'message': app.Chatbot.Event['message'],
            'postback': app.Chatbot.Event['postback']
        }>,
        message: Array<{}>,
        postback: app.Chatbot.PostbackEventHandler['PostbackEvent']
    }



export class PostbackEventHandler implements line.PostbackAction 
{
    type: "postback";
    data: string;
    public text: string;
    public displayText: string;

    public constructor(
        type: "postback",
        data: string,
        text: string,
        displayText: string
    ) {
        this.type = type;
        this.data = data;
        this.text = text;
        this.displayText = displayText;
    }

    /**
     * @return {string}
     */
    public getType() : 'postback' {
        return this.type;
    }

    public getData() : string {
        return this.data;
    }

    /**
     * @return {string}
     */
    public getText() : string {
        return this.text;
    }

    /**
     * @return {string}
     */
    public getDisplayText() : string {
        return this.displayText;
    }

    public PostbackEvent() {
        return {
            type: this.getType(),
            data: this.getData(),
            text: this.getText(),
            displayText: this.getDisplayText()
        };
    }
    
}

/**
 * @interface {app.Chatbot.Event}
 */
export class Event implements app.Chatbot.Event
{
    public type: Array<{
        'message': Array<{}>,
        'postback': Event['postback']
    }>;
    public message: Array<{}>;
    public postback: PostbackEventHandler['PostbackEvent'];

    public constructor(
        type: Array<{
            'message': Array<{}>,
            'postback': Event['postback']
        }>,
        message: Array<{}>,
        postback: PostbackEventHandler['PostbackEvent']
    ) {
        this.type = type;
        this.message = message;
        this.postback = postback;
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
            data: getPostbackData()
        };
    }
}

}