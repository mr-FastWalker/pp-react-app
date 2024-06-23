// import TelegramBot from 'node-telegram-bot-api';
//
// const token = process.env.TELEGRAM_BOT_TOKEN; // Убедитесь, что у вас есть токен вашего бота
// const bot = new TelegramBot(token, { polling: true });
//
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Received your message');
// });
//
// export default (req, res) => {
//   res.status(200).json({ status: 'Bot is running' });
// };