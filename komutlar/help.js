const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`NEPTÜNE BOT YARDIM!`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
        
        .addField(`<a:702090538613997598:713717611287937054> Ban Katogirisi İçin:`, `**n!bankatogirisi Yazabilirsiniz!**`) 
             .addField(`<a:702090538613997598:713717611287937054> Jail Sistemi İçin:`, `**n!jailkatagorisi Yazabilirsiniz!**`)
.addField(`<a:702090538613997598:713717611287937054> Kayıt Sistemi İçin:`, `**n!kayıtkatagorisi Yazabilirsiniz!**`)
        .addField(`<a:702090538613997598:713717611287937054> Otorolsistemi İçin:`, `**n!otorolkatagorisi Yazabilirsiniz!**`)
     .addField(`<a:702090538613997598:713717611287937054> Eğlence Sistemi İçin:`, `**n!eğlencekatagorisi Yazark Görebilirsiniz!**`) 
        .addField(`<a:702090538613997598:713717611287937054> Eğlence Katagorisini Görürsünüz:`, `**n!eğlencekatagorisi Yazarak Eğlencekatagorisini Atabilirsiniz!**`)
  .addField(`<a:702090538613997598:713717611287937054> Mesaj Siler:`, `**n!sil TANE Olarak Mesaj Silebilirsiniz!**`)
        .addField(`<a:702090538613997598:713717611287937054> Kişinin Avatarını Gösterir:`, `**n!avatar @KİŞi Kullana bilirsiniz etikedlediğniz Kullanıcının GİF VEYA PPini Görebilirsiniz!**`)
 .addField(`<a:702090538613997598:713717611287937054> Öneri Yaparsınız:`, `**n!öneri ÖNERİNİZ Öneri Yapabilirsiniz!**`)
        .addField(`<a:702090538613997598:713717611287937054> Emoji Hakıında Bilgi verir:`, `**n!emojibilgi EMOJİ İSMİ İle Emojiye Bakabilirsiniz!**`)
        .addField("<a:702090538613997598:713717611287937054> Botun Destek Sunucusuna Gelebilirsiniz! ", `[Sunucuya Gelmek İçin Tıkla!](https://discord.gg/6DxWdwn9uK)`, false)
             .setFooter(`n!yardım Komutunu Kullanan Kullanıcı ${message.author.username} `)
            
        return message.channel.sendEmbed(yardim);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}

exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}