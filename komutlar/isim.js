const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  if (!member) return message.channel.send("❌ Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send("❌ Bir İsim Yazmalısın!");
  member.setNickname(`${isim}`);
  const embed = new Discord.RichEmbed()
    .addField(
      `**Bu Kullanıcının İsmi Değiştirildi Aşşada Bilgiler!**`,
      `\n \n**İsmi Değiştirilen Kullanıcı:** ${member.user} \n **Yeni Kullanıcı Adı:** \` ${isim}\``
    )
    .setFooter(`Kullanan: ${message.author.username}`)
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};
//Dcs Ekibi
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nick", "isim"],
  permLevel: 0
};
exports.help = {
  name: "nick",
  description: "Birinin nickini değiştirir.",
  usage: "nick <yeni nick>"
};