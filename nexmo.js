const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '84b7460b',
    apiSecret: 'xtx7hYeQ0r1SpuYy',
});

const from = 'Nexmo';
const to = '01090411019';
const text = 'https://www.goorm.io/';

nexmo.message.sendSms(from, to, text);