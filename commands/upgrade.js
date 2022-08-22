module.exports = {
    name: 'upgrade',
    async execute(message, Discord){
        const profileModel = require('../models/profileSchema')
        const user = message.author.id
        const member = message.member
        const vars = require('../variables')
        if(member.roles.cache.find(r => r.id === vars.SUPREME_ALIEN_COMMANDER)){
            message.channel.send('You can\'t upgrade your rank anymore! It is at the highest level!')
        } else if(member.roles.cache.find(r => r.id === vars.JUNIOR_ALIEN_COMMANDER)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 2500){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 2500
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Supreme Alien Commander'});
                profile.save();
                const role = message.guild.roles.cache.find(r => r.id === vars.SUPREME_ALIEN_COMMANDER)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Supreme Alien Commander!')
            } else {
                message.channel.send(`You don't have enough points! You need ${2500 - profileData.points} more!`)
            }
        } else if(member.roles.cache.find(r => r.id === vars.PROFFESSOR)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 2100){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 2100
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Junior Alien Commander'});
                profile.save();
                const role = message.guild.roles.cache.find(r => r.id === vars.JUNIOR_ALIEN_COMMANDER)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Junior Alien Commander!')
            } else {
                message.channel.send(`You don't have enough points! You need ${2500 - profileData.points} more!`)
            }
        } else if(member.roles.cache.find(r => r.id === vars.ASSISTANT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 1750){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 1750
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Professor'});
                profile.save();
                const role = message.guild.roles.cache.find(r => r.id === vars.PROFFESSOR)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Professor!')
            } else {
                message.channel.send(`You don't have enough points! You need ${1750 - profileData.points} more!`)
            }
        } else if(member.roles.cache.find(r => r.id === vars.ELITE_ALIEN)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 1400){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 1400
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Assistant'});
                profile.save();
                const role = message.guild.roles.cache.find(r => r.id === vars.ASSISTANT)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Assistant!')
            } else {
                message.channel.send(`You don't have enough points! You need ${1400 - profileData.points} more!`)
            }
        } else if(member.roles.cache.find(r => r.id === vars.ALIEN_AGENT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 1050){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 1050
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Elite Alien'});
                profile.save();
                const role = message.guild.roles.cache.find(r => r.id === vars.ELITE_ALIEN)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Elite Alien!')
            } else {
                message.channel.send(`You don't have enough points! You need ${1050 - profileData.points} more!`)
            }
        } else if(member.roles.cache.find(r => r.id === vars.FIRST_CLASS_AGENT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 750){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 750
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Alien Agent'});
                profile.save();
                const role = message.guild.roles.cache.find(r => r.id === vars.ALIEN_AGENT)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Alien Agent!')
            } else {
                message.channel.send(`You don't have enough points! You need ${750 - profileData.points} more!`)
            }            
        } else if(member.roles.cache.find(r => r.id === vars.SECOND_CLASS_AGENT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 500){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 500
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'First Class Agent'});
                profile.save();
                const role = message.guild.roles.cache.find(r => r.id === vars.FIRST_CLASS_AGENT)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to First Class agent!')
            } else {
                message.channel.send(`You don't have enough points! You need ${500 - profileData.points} more!`)
            }            
        } else if(member.roles.cache.find(r => r.id === vars.THIRD_CLASS_AGENT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 300){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 300
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Second Class Agent'});
                profile.save();
                const role = message.guild.roles.cache.find(r => r.id === vars.SECOND_CLASS_AGENT)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Second Class Agent!')
            } else {
                message.channel.send(`You don't have enough points! You need ${300 - profileData.points} more!`)
            }            
        } else if(member.roles.cache.find(r => r.id === vars.PRIVATE_ALIEN)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 150){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 150
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Third Class Agent'});
                profile.save();
                const role = message.guild.roles.cache.find(r => r.id === vars.THIRD_CLASS_AGENT)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Third Class Agent!')
            } else {
                message.channel.send(`You don't have enough points! You need ${150 - profileData.points} more!`)
            }            
        } else if(member.roles.cache.find(r => r.id === vars.ALIEN)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 50){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 50
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Private Alien'});
                profile.save();
                const role = message.guild.roles.cache.find(r => r.id === vars.PRIVATE_ALIEN)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Private alien!')
            } else {
                message.channel.send(`You don't have enough points! You need ${50 - profileData.points} more!`)
            }            
        } else if(member.roles.cache.find(r => r.id === vars.ASTRONAUT)){
            astro(member, message, user, profileModel)
        } else {
            message.channel.send('You are not on a team yet!')
        }
    }
}