const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
//

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle(`${client.user.username}`)
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("BLACK")
  .setFooter(`© ${client.user.username}` , client.user.avatarURL)
  .setThumbnail("")
  .setDescription('<a:702090538613997598:713717611287937054> Neptune Bot Sitesi Artık Aktif!. <a:702090538613997598:713717611287937054>')
  .setTimestamp()
  .addField("Sitemiz", `[Site Linki](https://neptune-bot-site.glitch.me)`, false)
  .setURL('https://neptune-bot-site.glitch.me')
      .setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["s"],
  permLevel: 0
};

exports.help = {
  name: 'site',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};