const astro = require('./astro2')

module.exports = {
    name: 'refresh',
    async execute(message){
        const profileModel = require('../models/profileSchema')
        const user = message.author.id
        const member = message.member
        const vars = require('../variables')
        if(member.roles.cache.find(r => r.id === vars.SUPREME_ALIEN_COMMANDER)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Supreme Alien Commander'});
        profile.save();
            message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.JUNIOR_ALIEN_COMMANDER)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Junior Alien Commander'});
        profile.save();
                message.channel.send('Refreshed your profile!')
            } else if(member.roles.cache.find(r => r.id === vars.PROFFESSOR)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
          }, {rank: 'Proffessor'});
          profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.ASSISTANT)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Assistant'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.ELITE_ALIEN)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Elite Alien'});
        profile.save();
              message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.ALIEN_AGENT)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Alien Agent'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.FIRST_CLASS_AGENT)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'First Class Agent'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.SECOND_CLASS_AGENT)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Second Class Agent'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.THIRD_CLASS_AGENT)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Third Class Agent'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.PRIVATE_ALIEN)){

          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Private Alien'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.ALIEN)){

          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Alien'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.ASTRONAUT)){
          astro(member, message)
        }
    }
}