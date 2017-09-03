const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const token = require('./config/dev').telegramAPI;
const bot = new TelegramBot(token, {polling: true});
require('./routes')(bot);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 7777;

app.listen(PORT);
