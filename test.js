const TelegramBot = require('node-telegram-bot-api');
const botToken = '*';
const bot = new TelegramBot(botToken, { polling: false });
const channelId = '*';

function getMessages() {
    bot.getUpdates({ chat_id: channelId, limit: 10 })
        .then(updates => {
            updates.forEach(update => {
                const message = update.message;
                if (message) {
                    console.log(message)
                }
            });
        })
        .catch(error => {
            console.error('Ошибка при получении сообщений из канала:', error);
        });
}

getMessages();


