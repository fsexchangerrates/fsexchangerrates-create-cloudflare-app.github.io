Object.defineProperty(exports, "commonJS", { value: true });

const express = require('express');

const path = require('path');

const line = require('@line/bot-sdk');

const eventHandler = require('./app/eventHandler');

const { config } = require('./config');

const client = new line.Client(config);

const init = require('./index');

const HTMLElement = init();

let document = new HTMLElement;

document.getElementById('fsexchangerrates-create-cloudfare-app');

let port = process.env.PORT;

let baseUrl = config.baseURL;

const app = express();
app.listen(port, () => {
    console.log(`Server started on port`);
});

app.use('path', path.join(__dirname, 'path'));
app.use(line);

app.get('/', async function(req, res) {
    req = await req.body.render(document.getElementById('fsexchangerrates-create-cloudfare-app'), document);
    await document.style.display('block');
    return res.send(req);
});

app.post('/callback', line.middleware(config), (req, res) => {
    if (req.body.destination) {
        console.log('Destination User ID: ' + req.body.destination);
    }
    Promise.all(
        req.body.events.map(event => {
            console.log('event', event);
            return eventHandler(client, event, baseUrl);
        }).then((result) => {
            res.json(result).status(500).end();
        }).catch((error) => {
            throw new console.Error('error', error);
        })
    );

    res.status(200).send(req.body).end();
});


/**
 *
 *
 * @param {string} title
 * @returns string
 */
async function getPageTitle(title) {
    return title;
}

exports = app;