const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }

};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
client.on("guildCreate", guild => {
  let log = client.channels.get("810859084957876285");
  const embed = new Discord.RichEmbed()
    .setAuthor("Yeni Bir Sunucuya Eklendim")
    .setThumbnail(guild.iconURL)
    .setColor("GREEN")
    .addField(
      "<a:702090538613997598:713717611287937054> Sunucu İsmi:",
      `**${guild.name}**`
    )
    .addField(
      "<a:702090538613997598:713717611287937054> Sunucu ID:",
      `${guild.id}`
    )
    .addField(
      "Sunucu Bilgisi:",
      `<a:702090538613997598:713717611287937054> Sunucu Sahibi: ${guild.owner}\n<a:702090538613997598:713717611287937054> Sunucu Bölgesi: ${guild.region}\n<a:702090538613997598:713717611287937054> Üye Sayısı: ${guild.members.size}`
    )
    .addField(
      `Artık;`,
      `<a:702090538613997598:713717611287937054> ${client.guilds.size} Sunucuya, ` +
        client.guilds.reduce((a, b) => a + b.memberCount, 0) +
        ` Kullanıcıya Hizmet Veriyorum.`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  log.send(embed);
});


client.on("message", async message => {
  if (message.content === "n!fakegir") {
    // - yerine prefixi yaz
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(
                `✋ ${msg.author}, **Bu sunucuda, büyük harf kullanımı engellenmekte!**`
              )
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'n!oyver') {
    msg.channel.sendMessage('**Botumuza Oy Vererek Benim Gelişmemi Sağlayabilirsin <3** \n https://top.gg/bot/713716040072298506/vote')
    msg.react(`715987312286105660`)
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'n!botbilgi') {
    msg.channel.sendMessage('**Yapımcı:(BeakMayS.)** \n**Yardımcı:(ChetMore?)**')
    msg.react(`715987312286105660`)
  }
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (newMessage.author.bot || newMessage.channel.type == "dm") return;
  let log = oldMessage.guild.channels.get(await db.fetch(`mesaj_log_${oldMessage.guild.id}`));
  if (!log) return;
  if (oldMessage.content == newMessage.content) return;
  const embed = new Discord.RichEmbed()
    .setTitle(oldMessage.author.username + " | Mesaj Düzenlendi")
    .addField("Kullanıcı: ", oldMessage.author)
    .addField("Kanal: ", newMessage.channel)
    .addField("Eski Mesaj: ", "`​``" + oldMessage.content + "`​``")
    .addField("Yeni Mesaj: ", "`​``" + newMessage.content + "`​``")
  log.send(embed)
})
client.on("messageDelete", async (message) => {
  if (message.author.bot || message.channel.type == "dm") return;
  let log = message.guild.channels.get(await db.fetch(`mesaj_log_${message.guild.id}`));
  if (!log) return;
  const embed = new Discord.RichEmbed()
    .setTitle(message.author.username + " | Mesaj Silindi")
    .addField("Kullanıcı: ", message.author)
    .addField("Kanal: ", message.channel)
    .addField("Mesaj: ", "`​``" + message.content + "`​``")
  log.send(embed)
})
//birisini tagleyip mesajı editlerse

client.on("messageUpdate", async (oldMsg, newMsg) => {
  
  if (!oldMsg.mentions.users.first()) return;
  else{
      if(oldMsg.content == newMsg.content) return;
      let updateembed = new Discord.RichEmbed()
      .setColor("RED")
      .setTimestamp()
      .setTitle(oldMsg.author.username + " | Birisini etiketledi ve mesajını değiştirdi")
      .addField("Kullanıcı: ", oldMsg.author)
      .addField("Kanal: ", newMsg.channel)
      .addField("Eski Mesaj: ", "​" + oldMsg.content + "​")
      .addField("Yeni Mesaj: ", "​" + newMsg.content + "​")
      client.channels.get('810867339112349707').send(updateembed)
  }
});

//birisini tagleyip mesajı editlerse

//----------------------------------

// birisini tagleyip mesajı silerse

client.on("messageDelete", async (msgDelete) => {
  
  if (!msgDelete.mentions.users.first()) return;
  else{
      let deleteembed = new Discord.RichEmbed()
      .setColor("RED")
      .setTimestamp()
      .setTitle(msgDelete.author.username + " | Birisini etiketledi ve mesajını sildi")
      .addField("Kullanıcı: ", msgDelete.author)
      .addField("Kanal: ", msgDelete.channel)
      .addField("Silinen Mesaj: ", "​" + msgDelete.content + "​")
      client.channels.get('810859087783919637').send(deleteembed)
  }
});
