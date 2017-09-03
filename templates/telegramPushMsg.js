/**
 * Created by acldc on 9/3/2017.
 */
module.exports = (price, region, address, link) => {
    return `<b>Найдена новая квартира</b>\n<i>Цена: ${price}</i>\n<i>Район: ${region}</i>\n<i>Адресс: ${address}</i>\n<a href=\"https://www.lun.ua${link}">Посмотреть Квартиру</a>`
};