const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  
  var erkekrol = await db.fetch(`erkek_${message.guild.id}`);
  var kadınrol = await db.fetch(`kadın_${message.guild.id}`);
  var kayıteden = await db.fetch(`kayıteden_${message.guild.id}`);
  var kayıtsız = await db.fetch(`kayıtsız_${message.guild.id}`);
  var doğrulandı = client.emojis.find(emoji => emoji.name === "tik");
  
  if (!message.member.roles.has(kayıteden)) return message.channel.send(`Dostum Bu Komutu Kullanabilmek İçin **<@&${kayıteden}>** Yetkisine Sahip Olman Gerek`);
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Hatalı Kullanım >> Örnek Kullanım; n!kayıt @etiket <erkek/kadın/kayıtsil>**");
  let cinsiyet = args[1];
  if (!cinsiyet.lenght< 1 ) return message.reply("**Hatalı Kullanım >> Örnek Kullanım; !kayıt @etiket <erkek/kadın/kayıtsil>**");


if (cinsiyet == 'erkek') {
  user.removeRole(kayıtsız)
  message.react(doğrulandı)
  user.addRole(erkekrol)
}
if (cinsiyet == 'kadın') {
  user.removeRole(kayıtsız)
  message.react(doğrulandı)
  user.addRole(kadınrol)
}
if (cinsiyet == 'kayıtsil') {
  user.removeRole(kadınrol)
  message.react(doğrulandı)
  user.removeRole(erkekrol)
  user.addRole(kayıtsız)
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayit"],
    permLevel: 0
}
exports.help = {
    name: 'kayıt',
    description: '+kayıt @etiket erkek/kadın/kayıtsil',
    usage: 'erkek'
}