const discord = require("discord.js");
const { lchown } = require("fs");
var weather = require('weather-js');
module.exports = {
    name: 'tomorrow',
    description: "Tells tomorrows weather for the location you say",
    // aliases: ['t'],
    execute(client, message, args, Discord) {
        place = message.content.slice("11")
        if(!place) return message.channel.send("You didn't say a location :(")

        weather.find({ search: `${place}`, degreeType: 'F' }, function (err, result) {
            if (err) console.log(err);

            weatherResult = JSON.stringify(result);

            weatherlat = weatherResult.split(`","long"`)[0]
            weatherlat2 = weatherlat.split(`"lat":"`)[1]

            weatherlong = weatherResult.split(`","timezone"`)[0]
            weatherlong2 = weatherlong.split(`"long":"`)[1]

            timezone = weatherResult.split(`","alert"`)[0]
            timezone2 = timezone.split(`"timezone":"`)[1]

            tomorrowResult = weatherResult.split(`forecast`)[1]

            skytext = tomorrowResult.split(`","date"`)[0]
            skytext2 = skytext.split(`"skytextday":"`)[1]

            high = tomorrowResult.split(`","skycodeday"`)[0]
            high2 = high.split(`"high":"`)[1]

            low = tomorrowResult.split(`","high"`)[0]
            low2 = low.split(`"low":"`)[1]

            precip = tomorrowResult.split(`"},{"low"`)[0]
            precip2 = precip.split(`","precip":"`)[1]
            if(!precip2) precip3 = ("No Precipitation");
            
            const embed = new discord.MessageEmbed()
                .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
                .setColor('#6eb9ff')
                .setTitle(`Weather Forcast in ${place}`)
                // .setDescription(`${JSON.stringify(result, null, 2)}`)
                .addFields(
                    { name: 'latitude', value: `${weatherlat2}`, inline: true },
                    { name: 'longitude', value: `${weatherlong2}`, inline: true },
                    { name: 'Timezone', value: `${timezone2}`, inline: true },
                    { name: `Tomorrows Forcast`, value: `\u200B`, inline: false },
                    { name: `Weather Type`, value: `${skytext2}`, inline: true },
                    { name: `High `, value: `${high2}°`, inline: true },
                    { name: `Low `, value: `${low2}°`, inline: true },
                    { name: `Precipitation`, value: `${precip3}`, inline: true },

                )
                .setFooter('"w!tomorrow City, State", example: "w!tomorrow Indianapolis, IN"')
            message.channel.send(embed);
        });
    }
}