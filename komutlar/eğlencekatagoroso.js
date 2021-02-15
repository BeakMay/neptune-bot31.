const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Kategoriler`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`<a:702090538613997598:713717611287937054> Pornhubun Arka Planıyla Yazar:`, `**n!hub-yazı KELİME1 KELİME2 Yazabilirsiniz**`)
        .addField(`<a:702090538613997598:713717611287937054> Xox Oynarsınız`, `**n!xox @ÜYE karşıdaki evet derse xox oynarsınız!**`)
        .addField(`<a:702090538613997598:713717611287937054> Belirtiniz Kullanıcının İnstagramını Aratırsınız!`, `**n!instagram KULLANICI İSİM instagramdaki 1 kullanıcının profiline bakarsınız!**`)
        .addField(`<a:702090538613997598:713717611287937054> Çekiç Atarsınız`, `**n!çekiç @ÜYE Karşıdaki Kişiye Çekiç Atarsınız!**`)
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
	name : 'eğlencekatagorisi',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}