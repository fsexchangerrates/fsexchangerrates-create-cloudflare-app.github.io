import * as bottender from 'bottender';

import * as path from 'path';

import {
    Bot,
    LineConnector
} from 'bottender';

const page = document.getElementById('page');

Object.defineProperty(exports, "commonJS", { value: true });

const app = (app) => {

    let port = process.env.PORT;

    app.listen(port, () => {
        console.log(`Server started on port`);
    });

    app.get('/', async function(req, res) {
        req = await req.body.render(page.getElementById('page'), page);
        await page.style.display('block');
        return res.send(req);
    });

    app.post('/', async(req, res) => {

    });

}

const { config } = require('./config');
const client = new bottender.;

const hendler = async(context) => {

}

/**
 *
 *
 * @param {string} title
 * @returns string
 */
async function getPageTitle(title) {
    return title;
}

module.exports.app = app;