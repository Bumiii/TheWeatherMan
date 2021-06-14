const discord = require("discord.js");
const { lchown } = require("fs");
var weather = require('weather-js');
module.exports = {
    name: 'forcast',
    description: "Says the forcast for the week of the location that you say",
    // aliases: ['f'],
    execute(client, message, args, Discord) {
        place = message.content.slice("10")
        if (!place) return message.channel.send("You didn't say a location :(")

        weather.find({ search: `${place}`, degreeType: 'F' }, function (err, result) {
            if (err) console.log(err);

            weatherResult = JSON.stringify(result);

            weatherlat = weatherResult.split(`","long"`)[0]
            weatherlat2 = weatherlat.split(`"lat":"`)[1]

            weatherlong = weatherResult.split(`","timezone"`)[0]
            weatherlong2 = weatherlong.split(`"long":"`)[1]

            timezone = weatherResult.split(`","alert"`)[0]
            timezone2 = timezone.split(`"timezone":"`)[1]

            forcastResult = weatherResult.split(`forecast`)[1]

            day = forcastResult.split(`","shortday"`)[0]
            day2 = day.split(`"day":"`)[1]

            skytext = forcastResult.split(`","date"`)[0]
            skytext2 = skytext.split(`"skytextday":"`)[1]

            high = forcastResult.split(`","skycodeday"`)[0]
            high2 = high.split(`"high":"`)[1]

            low = forcastResult.split(`","high"`)[0]
            low2 = low.split(`"low":"`)[1]

            forcastResult2 = forcastResult.split(`},{"`)[1]

            day3 = forcastResult2.split(`","shortday"`)[0]
            day4 = day3.split(`"day":"`)[1]

            skytext3 = forcastResult2.split(`","date"`)[0]
            skytext4 = skytext3.split(`"skytextday":"`)[1]

            high3 = forcastResult2.split(`","skycodeday"`)[0]
            high4 = high3.split(`"high":"`)[1]

            low3 = forcastResult2.split(`","high"`)[0]
            low4 = low3.split(`low":"`)[1]

            forcastResult3 = forcastResult.split(`},{"`)[2]

            day5 = forcastResult3.split('","shortday"')[0]
            day6 = day5.split(`"day":"`)[1]

            skytext5 = forcastResult3.split(`","date"`)[0]
            skytext6 = skytext5.split(`"skytextday":"`)[1]

            high5 = forcastResult3.split(`","skycodeday"`)[0]
            high6 = high5.split(`"high":"`)[1]

            low5 = forcastResult3.split(`","high"`)[0]
            low6 = low5.split(`low":"`)[1]

            forcastResult4 = forcastResult.split(`},{"`)[3]

            day7 = forcastResult4.split(`","shortday"`)[0]
            day8 = day7.split(`"day":"`)[1]

            skytext7 = forcastResult4.split(`","date"`)[0]
            skytext8 = skytext7.split(`"skytextday":"`)[1]

            high7 = forcastResult4.split(`","skycodeday"`)[0]
            high8 = high7.split(`"high":"`)[1]

            low7 = forcastResult4.split(`","high"`)[0]
            low8 = low7.split(`low":"`)[1]

            forcastResult5 = forcastResult.split(`},{"`)[4]

            day9 = forcastResult5.split(`","shortday"`)[0]
            day10 = day9.split(`"day":"`)[1]

            skytext9 = forcastResult5.split(`","date"`)[0]
            skytext10 = skytext9.split(`"skytextday":"`)[1]

            high9 = forcastResult5.split(`","skycodeday"`)[0]
            high10 = high9.split(`"high":"`)[1]

            low9 = forcastResult5.split(`","high"`)[0]
            low10 = low9.split(`low":"`)[1]

            const embed = new discord.MessageEmbed()
                .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
                .setColor('#6eb9ff')
                .setTitle(`Weather Forcast in ${place}`)
                // .setDescription(`${JSON.stringify(result, null, 2)}`)
                .addFields(
                    { name: `\u200B`, value: `**${day2}'s Forcast**`, inline: false },
                    { name: `Weather Type`, value: `${skytext2}`, inline: true },
                    { name: `High `, value: `${high2}°`, inline: true },
                    { name: `Low `, value: `${low2}°`, inline: true },

                    { name: `\u200B`, value: `**${day4}'s Forcast**`, inline: false },
                    { name: `Weather Type`, value: `${skytext4}`, inline: true },
                    { name: `High `, value: `${high4}°`, inline: true },
                    { name: `Low `, value: `${low4}°`, inline: true },

                    { name: `\u200B`, value: `**${day6}'s Forcast**`, inline: false },
                    { name: `Weather Type`, value: `${skytext6}`, inline: true },
                    { name: `High `, value: `${high6}°`, inline: true },
                    { name: `Low `, value: `${low6}°`, inline: true },

                    { name: `\u200B`, value: `**${day8}'s Forcast**`, inline: false },
                    { name: `Weather Type`, value: `${skytext8}`, inline: true },
                    { name: `High `, value: `${high8}°`, inline: true },
                    { name: `Low `, value: `${low8}°`, inline: true },

                    { name: `\u200B`, value: `**${day10}'s Forcast**`, inline: false },
                    { name: `Weather Type`, value: `${skytext10}`, inline: true },
                    { name: `High `, value: `${high10}°`, inline: true },
                    { name: `Low `, value: `${low10}°`, inline: true },
                )
                .setFooter('"w!forcast City, State", example: "w!forcast Indianapolis, IN"')
            message.channel.send(embed);
        });
    }
}