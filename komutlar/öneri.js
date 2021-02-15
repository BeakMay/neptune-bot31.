

const Discord = require('discord.js')

exports.run = async(client, message, args) => {

      let isEnabled;
      message.reply("önerin botun destek sunucusuna gitti destek sunucusu : https://discord.gg/6DxWdwn9uK");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "810859086384070677";
      const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("DARK_RED")
        .addField(`Öneri Bilgileri`, `<a:702090538613997598:713717611287937054> **Sunucu**: ${message.guild.name} (${message.guild.id}) \n<a:702090538613997598:713717611287937054> **Kanal**: ${message.channel.name} (${message.channel.id}) \n<a:702090538613997598:713717611287937054> **Öneride Bulunan**: ${message.author.tag} (${message.author.id}) \n<a:702090538613997598:713717611287937054> **Öneri Mesajı**: ${mesaj}`)
        .setFooter("NEPTÜNE BOT")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
      }
    

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "bot",
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: 'Kullanım: b!öneri -önerinizi-yazın- Bot Hakkında Öneri Oluşturur.',
  usage: 'b!öneri'
};