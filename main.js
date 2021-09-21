const Discord = require('discord.js');
const client = new Discord.Client({ partials:  ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('ODg4NzE1NTk0MzIzNjA3NjEz.YUWu5Q.SsTZwWIwmC7CjLCg8T504EkVT6I');