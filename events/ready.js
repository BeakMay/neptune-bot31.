const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'n!'
module.exports = client => {
  
  const aktiviteListesi = [
    `Yeni Güncelleme Tarih : 26 Şubat 2021`
  
   
  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 7000)
}