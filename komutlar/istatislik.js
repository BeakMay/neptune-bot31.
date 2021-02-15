const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  message.delete()
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(client.user.avatarURL)
    .setTitle('<a:702090538613997598:713717611287937054> Neptüne Bot <a:702090538613997598:713717611287937054>')
    .addField('<a:702090538613997598:713717611287937054> Gecikme: ', client.ping + 'ms')
    .addField('<a:702090538613997598:713717611287937054>Müzik Çalınan Sunucu Sayısı;', client.voiceConnections.size, true)
    .addField('<a:702090538613997598:713717611287937054> Çalışma Süresi: ', `${duration}`, true)
    .addField('<a:702090538613997598:713717611287937054> Kullanıcılar:', client.guilds.reduce((a, b) => a + b.memberCount, 0), true)
    .addField('<a:702090538613997598:713717611287937054> Kanallar:', client.channels.size, true)
    .addField('<a:702090538613997598:713717611287937054> Sunucular:', client.guilds.size, true)
    .addField('<a:702090538613997598:713717611287937054> Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2), true)
    .addField('<a:702090538613997598:713717611287937054> Kütüphanesi;', `Discord.js`, true)
    .addField(`Discord.js sürümü:`, Discord.version, true)
      .addField('<a:702090538613997598:713717611287937054>Yapımcım:', '<@634496873285287967> \n `BeakMayS`', false)
      .addField('<a:702090538613997598:713717611287937054>Botun Başlanma Zamanı:', "Bot **03.04.2020**'de yapılmaya başlanmıştır", true)
    .setFooter('Neptüne | Her Hakkı Saklıdır..', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i'],
    permLevel: 0,
    kategori: "bot",
  category: "bot"
  };
  
  exports.help = {
    name: 'istatistik',
    description: 'Botun istatistiklerini gösterir.',
    usage: 'istatistik',
    enname: 'stat',
    endescription: 'Displays the bot statistics.',
    enusage: 'stat'
  };