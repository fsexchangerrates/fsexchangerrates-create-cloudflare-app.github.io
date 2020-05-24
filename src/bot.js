import * as line from '@line/bot-sdk';

import * as express from 'express';

const middleware = line.middleware();

const { config } = require('./config');

const client = new line.Client(config);

let port = process.env.PORT || 3000;

const router = express();
router.listen(port, () => {
    console.log('listening on port: ', `${port}`)
})