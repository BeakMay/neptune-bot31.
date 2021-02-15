const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kimi Dövmeiliyim Etiketle**');
    const embed = new Discord.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/637678901203566602/810889579267752007/videoplayback_1_1.gif')
  .setColor("RANDOM")
    .setDescription(`** ${mesaj}  \`` + message.author.username + '\` Senin ve arkadaşının ağzına sıçtı!**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vur'],
  permLevel: 0,
 kategori: "eğlence"
};

exports.help = {
  name: 'döv',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız!',
  usage: 'çekiç <@ETİKET>'
};