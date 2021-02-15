const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ayarlar.sahip)
    return message.channel.send(
      "Geliştiricim Değilsin Bu Komutu kullanamazsın.!"
    );

  message.channel.sendMessage(`**BOTUNUZ YENİDEN BAŞLATILDI!**`);
  message.delete(60).then(msg => {
    console.log(`✅ | Bot Yeniden Başlatıldı...`);

    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sıfırla"],
  permLevel: 0
};

module.exports.help = {
  name: "yenidenbaşlat",
  description: "",
  usage: "reboot"
};
