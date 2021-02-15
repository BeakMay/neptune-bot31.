const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Kategoriler`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`<a:702090538613997598:713717611287937054> Ban Yetkilisi:`, `**n!yak yetkilisi @ROL Olarak Ayarlayabilirsiniz!!**`)
        .addField(`<a:702090538613997598:713717611287937054> Ban Log Ayarlar:`, `**n!yak banlog #KANAL Olarak Yapabilirsiniz!!**`)
           .addField("<a:702090538613997598:713717611287937054> Botun Destek Sunucusuna Gelebilirsiniz! ", `[Sunucuya Gelmek İçin Tıkla!](https://discord.gg/6DxWdwn9uK)`, false)
             .setFooter(`Komutu Kullanan Kullanıcı ${message.author.username} `)
            
        return message.channel.sendEmbed(yardim);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : [''],
	permLevel : 0
}

exports.help = {
	name : 'bankatagorisi',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}