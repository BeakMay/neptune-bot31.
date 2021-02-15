exports.run = async (client, message, args) => {
let isim = args.slice(0).join(' ');
 
 
if(!isim) return message.channel.send('İstediğin ismi Yazmalısın'); 
if (!message.member.hasPermission("ADMINISTRATOR"))
 
 
message.guild.members.cache.get(message.author.id).setNickname(`${isim}`)
.setDescription(`**İsim Başarıyla Değiştirildi Yeni İsmi : (${isim}) `)
.setColor("RANDOM")

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimdegistir'],
    permLevel: 0
}
 
exports.help = {
    name: 'i',
    description: '.',
    usage: 'isimdeğiştir'
}