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
  .setDescription('<a:702090538613997598:713717611287937054> Neptüne Bot Sizin İçin Burda! <a:702090538613997598:713717611287937054>')
  .setTimestamp()
  .addField("Davet Linki ", `[Davet için tıklayınız](https://discordapp.com/oauth2/authorize?client_id=713716040072298506&scope=bot&permissions=8)`, false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=713716040072298506&scope=bot&permissions=8')
      .setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};