const discord = require("discord.js");
module.exports = {
    name: 'help',
    description: "Sends TheWeatherMan help menu",
    aliases: ['h', 'commands', 'c'],
    async execute(client, message, args, Discord) {
        const { commands } = message.client;
        text = message.content.split(" ")[1]
        prefix = ('w!');
        text2 = message.content.slice("2")


        if (!text) {
            const embed = new discord.MessageEmbed()
                .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
                .setColor('#6eb9ff')
                .setTitle("A Helping Hand")
                .setDescription(`**Say ${prefix}${text2} [command] to see info about that command**`)
                .addFields(
                    { name: 'What I do', value: "I'm a simple weather man that can tell you the weather in most places", inline: true },
                    { name: 'How to use my commands', value: "When searching for the weather in specific areas type 'w!weather [City], [State]. You can also look at a states with and not a cities'", inline: true },
                    { name: 'Any Bug or Errors?', value: "Please message the dev if you have any questions or if there is a bug you want to report, Bumi#0907", inline: true },

                )
                .setFooter('Have a great day!')
                .setTimestamp()
            message.channel.send(embed);
            console.log("Command Executed");
        } else {
            if (text == 'list') {
                const embed = new discord.MessageEmbed()
                    .setColor('#6eb9ff')
                    .setTitle('List of Commands:')
                    .setDescription(`${prefix}` + commands.map(c => c.name).join(`\n${prefix}`))
                    .setTimestamp();
                message.channel.send(embed);
                console.log("Command Executed");
            } else {
                const name = message.content.split(" ")[1]
                const cmd = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

                if (!cmd) {
                    message.reply(`${name} is not a valid command`);
                    console.log("Command Executed");
                    return
                }


                if (cmd.aliases) {
                    const embed = new discord.MessageEmbed()
                        .setColor('#039154')
                        .setTitle(`**Command Name:** ${cmd.name}`)
                        .setDescription(`**Description:** ${cmd.description}\n**Aliases: ${cmd.aliases}\n**`)
                        .setTimestamp();
                    message.channel.send(embed);
                    console.log("Command Executed");
                } else {
                    if (cmd.description) {
                        const embed = new discord.MessageEmbed()
                            .setColor('#039154')
                            .setTitle(`**Command Name:** ${cmd.name}`)
                            .setDescription(`**Description:** ${cmd.description}\n`)
                            .setTimestamp();
                        message.channel.send(embed);
                        console.log("Command Executed");
                    }
                }
            }
        }
    }
}