const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Kategoriler`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`<a:702090538613997598:713717611287937054> Kayıt Eden Rol Ayarlar:`, `**n!kayıteden-rol @ROL Olarak Ayarlayabilirsiniz!**`)
        .addField(`<a:702090538613997598:713717611287937054> Kayıtsız Rolünü Ayarlar:`, `**n!kayıtsız-rol @ROL Olarak Kayıtsız Rolünü Ayarlarsınız!**`)
             .addField(`<a:702090538613997598:713717611287937054> Erkek Rolünü Ayarlar:`, `**n!erkek-rol @ROL Olarak Erkek Rolünü Ayarlarsınız!**`)
          .addField(`<a:702090538613997598:713717611287937054> Kadın Rolünü Ayarlar:`, `**n!kadın-rol @ROL Olarak kadın Rolünü Ayarlarsınız!**`)
          .addField(`<a:702090538613997598:713717611287937054> kayıt edersiniz Ayarlar:`, `**n!kayıt erkek/kadın/kayıtsızsil Olarak Kayıt edersiniz!**`)
        .addField(`<a:702090538613997598:713717611287937054>  Etkiketlemeden Kendi İsminizi Değiştirebilir:`, `**n!i İSİM**`)
           .addField("<a:702090538613997598:713717611287937054> Botun Destek Sunucusuna Gelebilirsiniz! ", `[Sunucuya Gelmek İçin Tıkla!](https://discord.gg/cYWAMse)`, false)
        .addField("<a:702090538613997598:713717611287937054> Oy Verebilirsiniz ", `[Oy Vermek İçin Tıkla!](https://top.gg/bot/713716040072298506/vote)`, false)

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
	name : 'kayıtkatagorisi',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}