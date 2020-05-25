Object.defineProperty(exports, 'commonJS', { value: true });

const express = require('express');

const line = require('@line/bot-sdk');

const { config } = require('./config');

const { handler } = require('./handler');

let port = process.env.PORT || 3000;

const router = express.Router('/webhook', () => console.log('/webhook', router));

router.listen(port, () => {
    console.log('listening on port: ', `${port}`);
})

router.post('/webhook', line.middleware(config), async(req, res) => {

    Promise.all(req.body.events.map(event => {
            console.log('event', event);
            return handler(event);
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            throw new console.Error('err', err);
        })
    );

    return res.statusCode(200).send(req.body).end();
});

module.exports.router = router;