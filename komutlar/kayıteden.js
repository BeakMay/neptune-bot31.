const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let veri = await db.fetch(`kayıteden_${message.guild.id}`);
  
      let enis = message.mentions.roles.first();
  if (!enis) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir rol etiketleyiniz. Örnek; n!kayıteden-rol @Kayıt Sorumlusu`
        )
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
    const embed = new Discord.RichEmbed()
        message.channel.send(
        `Başarılı bir şekilde ${enis} kayıt eden rolü olarak ayarlandı.`
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed);
    
      await db.set(`kayıteden_${message.guild.id}`, enis.id);
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: "kayıteden-rol",
  description: "rütbe-ekle",
  usage: "rütbe-ekle"
};
