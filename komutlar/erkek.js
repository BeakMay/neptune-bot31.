const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  
  
  
      let enis2 = message.mentions.roles.first();
  if (!enis2) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir rol etiketleyiniz. Örnek; n!erkek-rol @Erkek`
        )
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Başarılı bir şekilde ${enis2} erkek rolü olarak ayarlandı.`
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed);
    
      await db.set(`erkek_${message.guild.id}`, enis2.id);
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: "erkek-rol",
  description: "rütbe-ekle",
  usage: "rütbe-ekle"
};
