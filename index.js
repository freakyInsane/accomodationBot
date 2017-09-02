const express = require('express');
const app = express();
const osmosis = require('osmosis');
const TelegramBot = require('node-telegram-bot-api');
const token = require('./config/dev').telegramAPI;

const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
     const chatId = msg.chat.id;
     osmosis
        .get('www.google.com')
        .set({'Title': 'title'})   // альтернатива: `.find('title').set('Title')`
        .data((data) => {
            bot.sendMessage(chatId,data.Title);
        });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 7777;

app.listen(PORT);
