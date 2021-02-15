const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()

  .setColor("RANDOM")
.setTitle("<a:702090538613997598:713717611287937054> **NEPTÜNE BOT OTOROL!!** <a:702090538613997598:713717611287937054>  ")
.addField("<a:702090538613997598:713717611287937054> n!otorol-ayarla","Otomatik Vercek Rolü Ayarlar. ÖRNEK: n!otorol-ayarla @ROL - Atıcak Kanalı Ayarlar ÖRNEK: n!otorol-ayarla #KANAL",true)
.addField("<a:702090538613997598:713717611287937054> n!otorol-msg","Otorolde Mesajı Belirler. ÖRNEK: n!otorol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!",true)
.addField("<a:702090538613997598:713717611287937054> n!otorol-kapat","Otorol Sistemini DevreDışı Bırakır!",true)
 .addField("<a:702090538613997598:713717611287937054> Botun Destek Sunucusuna Gelebilirsiniz! ", `[Sunucuya Gelmek İçin Tıkla!](https://discord.gg/cYWAMse)`, false) .addField("<a:702090538613997598:713717611287937054> Oy Verebilirsiniz ", `[Oy Vermek İçin Tıkla!](https://top.gg/bot/713716040072298506/vote)`, false)

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
    name: 'otorolkatagorisi', 
    description: 'The Help Command',
    usage: 'help'
  };