const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(
      "**Bu Komutu Kullanmaya Yetkin Yetmiyor!**"
    );
  if (!args[0])
    return message.channel.send(
      "**Ne Kadar Mesaj Siliceksin Onu Belirt!**"
    );

  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
 message.channel.sendMessage(`**Belirtiğin Kadar Mesaj Silindi!** `)
      .then(msg => msg.delete(500000));
 
  });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle","yolla","sik"],
  permLevel: 0
};

exports.help = {
  name: "sil",
  discription: "Belirli Sayıda Mesaj Sil",
usage: ".sil rakam belirtiniz aga"
};