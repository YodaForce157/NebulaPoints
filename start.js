const profileModel = require('./models/profileSchema');
const variables = require('./variables');

module.exports = async (client, discord, message, realmember) => {
   let member
   if(message){
     member = message.member;
   } else {member = realmember}

   let user
   if(!message){
     user = member.id
   } else {
     user = message.author.id
   }

   let team
   if(member.roles.cache.find(r => r.id === variables.ALIEN)){
     team = 'Alien'
   } else if(member.roles.cache.find(r => r.id === variables.ASTRONAUT)){
     team = 'Astronaut'
   } else {team = 'None, check the choose teams channel to pick one!'}
    let profileChecker = await profileModel.findOne({ userID: user})
    if(!profileChecker){
    let profile = await profileModel.create({
      userID: user,
      points: 0,
      rank: team
    });
    profile.save();
    if(message.author){
      message.channel.send(`Created new profile for ${message.author}!`)
    }
} else if (message){message.channel.send(`Couldn't create a profile: You already have a profile!`)}};