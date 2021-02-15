const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime Çekiç Atcağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/667450656050905118/677528400155639808/unnamed.gif')
  .setColor("RANDOM")
    .setDescription(`** ${mesaj}  \`` + message.author.username + '\`  Sana  🔨  Attı! Canın Acımış Olmalı!**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiç-at'],
  permLevel: 0,
 kategori: "eğlence"
};

exports.help = {
  name: 'çekiç',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız!',
  usage: 'çekiç <@ETİKET>'
};