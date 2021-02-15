const Discord = require('discord.js') 
const db = require('quick.db') 
exports.run = async(client, message, args) => {

  let rol = message.mentions.roles.first()
  let channel = message.mentions.channels.first()
  if(args[0] == 'tümverilerisil') {
      db.delete(`banrol${message.guild.id}`)
      db.delete(`banchannel${message.guild.id}`)
    return;
  }
  if(args[0] == 'banyetkilirol') {
    if(args[1] == 'sil') {
      db.delete(`banrol${message.guild.id}`)
      message.channel.send('Ban yetkilisi rolü veritabanından silindi.')
      return;
    } 
    db.set(`banrol${message.guild.id}`, rol.id)
    message.channel.send(`Ban yetkilisi ${rol} olarak ayarlandı.`)
    return;
    }
  if(args[0] == 'banlog') {
    if(args[1] == 'sil') {
      db.delete(`banchannel${message.guild.id}`)
      message.channel.send('Ban logu veritabanından silindi.')
      return;
    }
    db.set(`banchannel${message.guild.id}`, channel.id)
    message.channel.send(`Ban log Kanalı ${channel} olarak ayarlandı!`)
    return;
    }
  console.log(`**BİRİ BANLANDI!**`);
  if(!await db.fetch(`banrol${message.guild.id}`)) return message.reply('Ban yetkilisi ayarlı değil')
  if(!args[0]) return message.reply('Havayımı banlıcan?')
  if(!message.guild.member(message.author).roles.has(await db.fetch(`banrol${message.guild.id}`))) return message.channel.send(new Discord.RichEmbed().setDescription(`Bu komutu kullanabilmek için;
${message.guild.roles.get(await db.fetch(`banrol${message.guild.id}`))} rolüne sahip olmalısın`))
  let user = message.mentions.users.first()
  let rea = args.slice(1).join(' ')
  let member = message.guild.member(user)
  let logdeneme = await db.fetch(`banchannel${message.guild.id}`)
  let kanal = message.guild.channels.find(v => v.id === logdeneme);
  const log = message.guild.channels.get(logdeneme)
    message.channel.send(`${user.tag} , sunucudan ${message.author} tarafından {rea || ''} **yasaklandı** `, new Discord.Attachment('https://media.discordapp.net/attachments/678700763949694992/681557448540029035/Bells.Byeburn.gif')) 
  if(!log) return message.channel.send('Ban log kanalı ayarlı değil!')
log.send(`**Yetkili**, ${message.author}: **${user.tag}** kullanıcısını, banladı**Yasaklanama nedeni:** ${rea || ''}`,new Discord.Attachment('https://media.discordapp.net/attachments/678700763949694992/681557448540029035/Bells.Byeburn.gif')) 

  member.ban(rea ||'')
 

  return;
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "yak"
};