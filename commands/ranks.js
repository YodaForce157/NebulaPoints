module.exports = {
    name: 'ranks',
    execute(message, Discord){
        const member = message.member
        if(member.roles.cache.find(r => r.name === 'Aliens 👽')){
            team = 'Alien'
        } else if(member.roles.cache.find(r => r.name === 'Astronauts 👨‍🚀')){
            team = 'Astronaut'
        } else {team = 'None, check the choose teams channel to pick one!'}
        if(team === 'Alien'){
            const aliens = new Discord.MessageEmbed()
            .setTitle('Alien Ranks')
            .setDescription('A list of ranks you can get from leveling up on team Aliens!')
            .setColor('#c7f58e')
            .addField('SUPREME ALIEN COMMANDER', 'Cost: 2500')
            .addField('Perks:', 'Get a staff application if you would like')
            .addField('JUNIOR ALIEN COMMANDER', 'Cost: 2100')
            .addField('Perks:', 'Custom role + Custom command')
            .addField('PROFFESSOR', 'Cost: 1750')
            .addField('Perks:', 'Perms for hosting BIG Events (under staff\'s moderation)')
            .addField('ASSISTANT', 'Cost: 1400')
            .addField('Perks:', 'Permission to host a mini event')
            .addField('ELITE ALIEN', 'Cost: 1050')
            .addField('Perks:', 'access to +mature')
            .addField('ALIEN AGENT', 'Cost: 750')
            .addField('Perks:', 'You can get one of three choices, either you can host polls, send quotes, or send fun facts')
            .addField('FIRST CLASS AGENT', 'Cost: 500')
            .addField('Perks', 'Access to <#693035356093677588> by using +mature')
            .addField('SECOND CLASS AGENT', 'Cost: 300')
            .addField('Perks:', 'Access to  <#551396265443983370> and <#826708464264937483>')
            .addField('THIRD CLASS AGENT', 'Cost: 150')
            .addField('Perks:', 'Access to <#732973658687144016> and <#734655930314260550>')
            .addField('PRIVATE ALIEN', 'Cost: 50')
            .addField('Perks:', 'Access to music')
            .addField('Alien', 'Cost: Free');

            message.channel.send({embeds: [aliens]})
        } else if(team === 'Astronaut'){
            const astro = new Discord.MessageEmbed()
            .setTitle('Astronaut Ranks')
            .setDescription('A list of ranks you can get from leveling up on team Astronauts!')
            .setColor('#51b5e6')
            .addField('STRATEGIC COMMANDER', 'Cost: 2500')
            .addField('Perks:', 'Get a staff application if you would like')
            .addField('MISSION SPECIALIST', 'Cost: 2100')
            .addField('Perks:', 'Custom role + Custom command')
            .addField('CHIEF SPACECRAFT COMMANDER ', 'Cost: 1750')
            .addField('Perks:', 'Perms for hosting BIG Events (under staff\'s moderation)')
            .addField('SENIOR SPACECRAFT COMMANDER', 'Cost: 1400')
            .addField('Perks:', 'Permission to host a mini event')
            .addField('SPACECRAFT COMMANDER', 'Cost: 1050')
            .addField('Perks:', 'access to +mature')
            .addField('MASTER SERGEANT', 'Cost: 750')
            .addField('Perks:', 'You can get one of three choices, either you can host polls, send quotes, or send fun facts')
            .addField('TECHNICAL SERGEANT', 'Cost: 500')
            .addField('Perks', 'Access to <#693035356093677588> by using +mature')
            .addField('SENIOR SPACECRAFT AGENT', 'Cost: 300')
            .addField('Perks:', 'Access to  <#551396265443983370> <#826708464264937483>')
            .addField('SPACECRAFT AGENT', 'Cost: 150')
            .addField('Perks:', 'Access to <#732973658687144016> and <#734655930314260550>')
            .addField('SENIOR ASTRONAUTS', 'Cost: 50')
            .addField('Perks:', 'Access to music')
            .addField('Astronaut', 'Cost: Free');

            message.channel.send({embeds: [astro]});
        }
    }
}