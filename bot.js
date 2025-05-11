const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'tên-server.aternos.me', // đổi thành server bạn
  port: 25565, // cổng mặc định
  username: 'emailminecraft@gmail.com', // tài khoản Minecraft
  auth: 'microsoft' // hoặc 'mojang' nếu acc cũ
});

bot.on('spawn', () => {
  console.log('✅ Bot đã đăng nhập thành công!');
  bot.chat('Bot online để giữ server sống!');
});

bot.on('error', err => {
  console.log('❌ Lỗi:', err);
});

bot.on('end', () => {
  console.log('⛔ Bot bị ngắt, đang khởi động lại...');
  setTimeout(() => {
    require('child_process').spawn(process.argv.shift(), process.argv, {
      cwd: process.cwd(),
      detached: true,
      stdio: 'inherit'
    });
  }, 5000);
});
