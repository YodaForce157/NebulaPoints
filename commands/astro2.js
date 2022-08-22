module.exports = {
    async execute(member, message){
        const profileModel = require('../models/profileSchema')
        const user = message.author.id
        const vars = require('../variables')
        if(member.roles.cache.find(r => r.id === vars.STRATEGIC_COMMANDER)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Strategic Commander'});
        profile.save();
            message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.MISSION_SPECIALIST)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Mission Specialist'});
        profile.save();
                message.channel.send('Refreshed your profile!')
            } else if(member.roles.cache.find(r => r.id === vars.CHEIF_SPACESHIP_COMMANDER)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
          }, {rank: 'Cheif SpaceCraft Commander'});
          profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.SENIOR_SPACECRAFT_COMMANDER)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Senior SpaceCraft Commander'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.SPACECRAFT_COMMANDER)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'SpaceCraft Commander'});
        profile.save();
              message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.MASTER_SERGEANT)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Master Sergeant'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.TECHNICAL_SERGEANT)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Technical Sergeant'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.SENIOR_SPACECRAFT_AGENT)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Senior SpaceCraft Agent'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.SPACECRAFT_AGENT)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'SpaceCraft Agent'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.SENIOR_ASTRONAUT)){

          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Senior Astronaut'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        } else if(member.roles.cache.find(r => r.id === vars.ASTRONAUT)){
          let profile = await profileModel.findOneAndUpdate({
            userID: user,
        }, {rank: 'Astronaut'});
        profile.save();
                message.channel.send('Refreshed your profile!')
        }
    }
}