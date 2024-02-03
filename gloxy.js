const Discord = require("discord.js")
const mongoose = require("mongoose")
const { Client, GatewayIntentBits } = require('discord.js');
const config = require("./config.json")
const client = new Client({
	intents: [98303, 
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
    ]
});

require("./src/handlers/commandHandler")(client)
require("./src/handlers/eventHandler")(client)
require("./src/handlers/mongoHandler")(client)

client.login(config.Bot.Token)

client.on('guildMemberAdd', (member) => {
	// Yeni giren üyenin ismini değiştir
	const newUsername = "İsim | Yaş"; // Değiştirmek istediğiniz ismi buraya yazın
  
	member.setNickname(newUsername)
	  .then(() => console.log(`Yeni üyenin ismi değiştirildi: ${member.user.tag}`))
	  .catch((error) => console.error(`İsim değiştirme sırasında bir hata oluştu: ${error}`)); 
})