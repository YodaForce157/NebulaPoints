const Discord = require('discord.js');
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_INTEGRATIONS, Discord.Intents.FLAGS.DIRECT_MESSAGES]})

const fs = require('fs')
const vars = require('./variables')
const start = require('./start')
const welcome = require('./welcome');
const points1 = require('./points');
const mongoose = require('mongoose')

client.on('ready', () => {
    console.log('Online!')
})

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
//Commands
client.on('messageCreate', message =>{
    
    if(!message.content.startsWith(vars.prefix)|| message.author.bot) return;
    
    const args = message.content.slice(vars.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'start'){
        start(client, Discord, message)
    }
    if(command === 'find'){
        const User = client.users.cache.get(args[0]); // Getting the user by ID.
        if (User) { // Checking if the user exists.
            message.channel.send(User.tag) // The user exists.
        } else {
            message.channel.send("User not found.") // The user doesn't exists or the bot couldn't find him.
        };
    }
    if(command === 'profile' || command === 'p'){
        client.commands.get('profile').execute(message, Discord)
    }
    if(command === 'refresh'){
        client.commands.get('refresh').execute(message);
    }
    if(command === 'message'){
        client.commands.get('message').execute(message, args)
    }
    if(command === 'ranks'){
        client.commands.get('ranks').execute(message, Discord)
    }
    if(command === 'upgrade' || command === 'up'){
        client.commands.get('upgrade').execute(message, Discord)
    }
    if(command === 'give'){
        client.commands.get('give').execute(message, args)
    }
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord)
    }
})
//points
client.on("guildMemberAdd", (member) => {
    const realmember = member
    start(client, Discord, realmember)
    welcome(Discord, member)
})
client.on('messageCreate', async message => {
    if(message.author.bot)return;
    points1(message)
})
//db
mongoose.connect(vars.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connected To MONGODB')
}).catch((err) => {
    console.log(err);
})


client.login(vars.token)