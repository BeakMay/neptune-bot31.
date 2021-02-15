const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
  
if(!rol) return message.channel.send(`<a:702090538613997598:713717611287937054> Ayarlamam İçin Bir Rol Etiketlemeilisin. 
<a:702090538613997598:713717611287937054>  Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
<a:702090538613997598:713717611287937054> Örnek Kullanım : s!otorol @rol #kanal 

 Önemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem :)`)  
 if(!kanal) return message.channel.send(':iptal: Ayarlamam İçin Bir Kanal Etiketlemeilisin.')

message.channel.send(`Otorol Aktif Edildi 
'${rol}' Olarak Güncelledim! 
Kayıt Kanalını '${kanal}' Olarak Güncelledim!`)

db.set(`otok_${message.guild.id}`, kanal.id)  
db.set(`otorol_${message.guild.id}`, rol.id)  

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otorol-ayarla',
  description: 'oto-rol-ayarla', 
  usage: 'oto-rol-ayarla'
};