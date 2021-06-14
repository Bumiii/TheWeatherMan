const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const fs = require('fs');
const commands = require("./commands/test.js")

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.embedCategories = new Set();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.on('ready', () => {
    
    client.embedCategories.add(commands.category);

    client.user.setPresence({
        status: 'available',     //sets status button to green   
        activity: {
            name: `the weather in ${client.guilds.cache.size} servers`,    //This is the custom text  
            type: 'WATCHING'     //this is the type (duh). 'watching' would also be an option  
        }
        
    });
});

client.login(process.env.DISCORD_TOKEN);