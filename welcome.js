module.exports = async(Discord, member) => {

    {
        const embed = new Discord.MessageEmbed()
        .setTitle('Welcome!')
        .setDescription(`Welcome ${member} to the server!`)
        .addField(`Welcome to Space Galaxy!`, `We are a big discord community!`)
        .addField(`Make sure to read the rules!`, `<#748978349057245325>`)
        .addField(`Choose between Aliens and astronauts!`, `<#711993207919214602>`)
        .addField(`Select where you are from, your gender and more!`, `<#726703473877581834>`);
        member.guild.channels.cache.get('546300312206704671').send(embed);
    }
}