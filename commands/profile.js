module.exports = {
    name: 'profile',
    async execute(message, Discord){
        const profileModel = require('../models/profileSchema')
        const vars = require('../variables')
        let user
        let ping
        let donthave
        let val
        if(message.mentions.users.first()) {
            user = message.mentions.users.first().id;
            ping = message.mentions.users.first();
            donthave = 'This user doesn\'t have a profile yet! Tell them to do +start to create one!'
        } else {
            user = message.author.id
            ping = message.author
            donthave = 'You don\'t have a profile yet! Do +start to create one!'
        }
        const profileData = await profileModel.findOne({ userID: user})

        if(!profileData){
            message.channel.send(donthave)
        } else {
        const embed = new Discord.MessageEmbed()
        .setTitle('Profile:')
        .setColor(vars.color)
        .setDescription(`This is ${ping}'s profile info`)
        .setFooter('Made By YodaForce157')
        .addField('User:', `${ping}`)
        if(profileData.points === null){
            val = 0
        } else {
            val = profileData.points
        }
        embed.addField('Points:', val.toString())
        .addField('Rank', profileData.rank);

        message.channel.send({embeds: [embed]});
        }
    }
}