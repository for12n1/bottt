const Discord = require("discord.js");
  module.exports.run = async (bot, message, args) => {      let replies =
 ["https://media.giphy.com/media/ssxUuhriUoGQ0/giphy.gif", "https://media.giphy.com/media/11KZ5xbbnE0EuY/giphy.gif", "https://media.giphy.com/media/etd93UKSpRAIw/giphy.gif", "https://media.giphy.com/media/1232gDBb8YxzXO/giphy.gif"];      let result =
 Math.floor((Math.random() * replies.length));      let gifembed = new 
Discord.RichEmbed()         .setTitle("Gifiniz ❤")         .setColor("#FF69B4")
       .setFooter(`Gifiniz Elinizde!`, message.author.avatarURL)
         .setImage(replies[result]);      message.channel.send(gifembed); };
  exports.conf = {   enabled: true,
   guildOnly: false,
   aliases: ['atatürk-gif','atagif'],
   permLevel: 0 }; 
 exports.help = {   name: 'atagif',
   description: 'Rastgele atatürk gifi atar.',
   usage: 'ata' }; 