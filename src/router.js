import * as line from '@line/bot-sdk';

import * as express from 'express';

Object.defineProperty(exports, '_esModules', { value: true });

const middleware = line.middleware();

const { config } = require('./config');

let port = process.env.PORT || 3000;

const router = express.Router(ServiceWorkerRegistration);
router.listen(port, () => {
    console.log('listening on port: ', `${port}`);
})

const { handler } = require('./handler');

router.post('/webhook', middleware(config), (req, res) => {

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

exports = router;