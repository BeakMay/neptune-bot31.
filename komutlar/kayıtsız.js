const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  
  
      let enis3 = message.mentions.roles.first();
  if (!enis3) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir rol etiketleyiniz. Örnek; n!kayıtsız-rol @Kayıtsız`
        )
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Başarılı bir şekilde ${enis3} kayıtsız rolü olarak ayarlandı.`
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed);
    
      await db.set(`kayıtsız_${message.guild.id}`, enis3.id);
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: "kayıtsız-rol",
  description: "rütbe-ekle",
  usage: "rütbe-ekle"
};
