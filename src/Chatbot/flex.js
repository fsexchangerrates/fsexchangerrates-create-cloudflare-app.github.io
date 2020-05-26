const greeting = require('./greeting.json');

const paypal = require('./paypal.json');

const webmoney = require('./webmoney.json');

const perfectmoney = require('./perfectmoney.json');

const neteller = require('./neteller.json');

const skrill = require('./skrill.json');

function makeFlex(flex) {
    switch (flex) {
        case 'greeting':
            return greeting;
        case 'paypal':
            return paypal;
        case 'webmoney':
            return webmoney;
        case 'perfectmoney':
            return perfectmoney;
        case 'neteller':
            return neteller;
        case 'skrill':
            return skrill;
        default:
            return console.log(flex);
    }
}

module.exports = {
    greeting: makeFlex('greeting'),
    paypal: makeFlex('paypal'),
    webmoney: makeFlex('webmoney'),
    perfectmoney: makeFlex('perfectmoney'),
    neteller: makeFlex('neteller'),
    skrill: makeFlex('skrill'),
};