/**
 * Created by acldc on 9/3/2017.
 */
const osmosis = require('osmosis');
const lunTemplate = require('../templates/telegramPushMsg.js');
osmosis.config('keep_data', true);

module.exports = (bot) => {
    let previousID = '';
    let msgLun = '';

    bot.onText(/\/echo (.+)/, (msg, match) => {
        const chatId = msg.chat.id;
        const resp = match[1];
        bot.sendMessage(chatId, resp);
    });

    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, "Welcome, Do you want use our bot?", {
            reply_markup: {
                resize_keyboard: true,
                keyboard: [["/yes", "/no"]]
            }
        });

    });

    bot.onText(/\/yes/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, "Выберете сайты для каких вы хотите запустить бот",{
            reply_markup: {
                resize_keyboard: true,
                keyboard: [["/lun"]]
            }
        });
    });

    bot.onText(/\/lun/, (msg) => {
        if(msgLun == '') {
            msgLun = msg;
        }
        console.log(msgLun.chat.id);
/*        setInterval(()=>{
            osmosis
                .get('www.lun.ua/uk/%D0%BE%D1%80%D0%B5%D0%BD%D0%B4%D0%B0-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80-%D0%BA%D0%B8%D1%97%D0%B2')
                .set({
                    id: ['.realty-card @data-jss'],
                    link: ['.realty-card-content a@href'],
                    price: ['.realty-card-characteristics__price'],
                    region: ['.realty-card-header__subtitle'],
                    address: ['.realty-card-header-title__street @title'],
                })
                .data((data) => {
                    console.log(previousID);
                    if(previousID !== data.id[0] || previousID == '') {
                        bot.sendMessage(msgLun.chat.id,lunTemplate(data.price[0],data.region[0], data.address[0], data.link[0]) ,{parse_mode : "HTML"});
                        previousID = data.id[0]
                    }
                })
                .log(console.log)
                .error(console.log)
                .debug(console.log)
        },5000);*/
        osmosis
            .get('www.lun.ua/uk/%D0%BE%D1%80%D0%B5%D0%BD%D0%B4%D0%B0-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80-%D0%BA%D0%B8%D1%97%D0%B2')
            .set({
                id: ['.realty-card @data-jss'],
                link: ['.realty-card-content a@href'],
                price: ['.realty-card-characteristics__price'],
                region: ['.realty-card-header__subtitle'],
                address: ['.realty-card-header-title__street @title'],
            })
            .data((data) => {
                console.log(previousID);
                bot.sendMessage(msg.chat.id,lunTemplate(data.price[0],data.region[0], data.address[0], data.link[0]) ,{parse_mode : "HTML"});
/*                if(previousID !== data.id[0] || previousID == '') {
                    previousID = data.id[0]
                } else {
                    bot.sendMessage(msg.chat.id, 'Нету пока еще новых объявлений');
                }*/
            })
            .log(console.log)
            .error(console.log)
            .debug(console.log)
    });

    bot.onText(/\/no/, (msg) => {
        bot.sendMessage(msg.chat.id, "Bot stop working");
    });
};