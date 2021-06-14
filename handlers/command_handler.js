const fs = require('fs');

module.exports = (client, Discord) => {
    const command_files = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
    const main_files = fs.readdirSync(`./commands/main/`).filter(file => file.endsWith('.js'));
    const misc_files = fs.readdirSync(`./commands/misc/`).filter(file => file.endsWith('.js'));

    for (const file of command_files) {
        const command = require(`../commands/${file}`);
        if (command.name) {
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
    for (const file of main_files) {
        const command = require(`../commands/main/${file}`);
        if (command.name) {
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
    for (const file of misc_files) {
        const command = require(`../commands/misc/${file}`);
        if (command.name) {
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}