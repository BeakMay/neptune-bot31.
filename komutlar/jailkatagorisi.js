const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()

  .setColor("RANDOM")
.setTitle("<a:702090538613997598:713717611287937054> **NEPTÜNE BOT JAİL!** <a:702090538613997598:713717611287937054>  ")
.addField("<a:702090538613997598:713717611287937054> n!jail yetkilirol"," Jail Atacak Olan Görevlinin Rolü.",true)
.addField("<a:702090538613997598:713717611287937054> n!jail cezalırol"," Jail Cezası Alan Kişilerin Rolü.",true)
.addField("<a:702090538613997598:713717611287937054> n!jail"," Jail'e Atma Komutudur Jail Kanalı Açmanıza Gerek Yok Bot Kendisi Açacaktır.",true)
 .addField("<a:702090538613997598:713717611287937054> Botun Destek Sunucusuna Gelebilirsiniz! ", `[Sunucuya Gelmek İçin Tıkla!](https://discord.gg/cYWAMse)`, false)
.addField("<a:702090538613997598:713717611287937054> Oy Verebilirsiniz ", `[Oy Vermek İçin Tıkla!](https://top.gg/bot/713716040072298506/vote)`, false)

.setThumbnail(message.author.avatarURL)
.setColor('RANDOM')
message.channel.sendEmbed(embed)
  
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'jailkatagorisi', 
    description: 'The Help Command',
    usage: 'help'
  };