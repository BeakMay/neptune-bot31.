const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let veri = await db.fetch(`kayıteden_${message.guild.id}`);
  
      let enis5 = message.mentions.roles.first();
  if (!enis5) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir rol etiketleyiniz. Örnek; n!kadın-rol @Kadın`
        )
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Başarılı bir şekilde ${enis5} kadın rolü olarak ayarlandı.`
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed);
    
      await db.set(`kadın_${message.guild.id}`, enis5.id);
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: "kadın-rol",
  description: "rütbe-ekle",
  usage: "rütbe-ekle"
};
