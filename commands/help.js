module.exports = {
    name: 'help',
    async execute(message, args, Discord){
        const vars = require('../variables')
        if(!args[0]){
        const embed = new Discord.MessageEmbed()
        .setTitle('Help')
        .setDescription('A list of help commands')
        .setColor(vars.color)
        .addField('Commands', '+Help commands')
        .addField('Info', '+Help info');
        message.channel.send({embeds: [embed]})
        } else if(args[0] === 'commands'){
            const embed = new Discord.MessageEmbed()
            .setTitle('Commands')
            .setDescription('A list of commands')
            .setColor(vars.color)
            .addField('+Start', 'Creates a new profile if you don\'t have one')
            .addField('+Profile', 'Shows your profile stats')
            .addField('+Refresh', 'Refreshes your profile')
            .addField('+Ranks', 'Shows a list of ranks based on your team')
            .addField('+Upgrade', 'Upgrades your rank if you have enough points')
            .addField('+Message', 'Sends a message to YodaForce157#5785');
            message.channel.send({ embeds: [embed]})
        } else if(args[0] === 'info'){
            const embed = new Discord.MessageEmbed()
            .setTitle('Info')
            .setColor(vars.color)
            .setDescription('Nebula is SpaceGalaxy\'s custom bot made by YodaForce157#5785!');

            message.channel.send({ embeds: [embed]});
        }
    }
}