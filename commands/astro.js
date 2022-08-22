module.exports = {
    async execute(){
        const vars = require('../variables')
        if(member.roles.cache.find(r => r.id === vars.STRATEGIC_COMMANDER)){
            message.channel.send('You can\'t upgrade your rank anymore! It is at the highest level!')
        } else if(member.roles.cache.find(r => r.id === vars.MISSION_SPECIALIST)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 2500){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 2500
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Strategic Commander'});
                profile.save();
                const role = message.guild.roles.find(r => r.id === vars.STRATEGIC_COMMANDER)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Strategic Commander')
            } else {
                message.channel.send(`You don't have enough points! You need ${2500 - profileData.points} more!`)
            }
        } else if(member.roles.cache.find(r => r.id === vars.CHEIF_SPACESHIP_COMMANDER)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 2100){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 2100
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Mission Specialist'});
                profile.save();
                const role = message.guild.roles.find(r => r.id === vars.MISSION_SPECIALIST)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Mission Specialist!')
            } else {
                message.channel.send(`You don't have enough points! You need ${2500 - profileData.points} more!`)
            }
        } else if(member.roles.cache.find(r => r.id === vars.SENIOR_SPACECRAFT_COMMANDER)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 1750){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 1750
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Cheif SpaceCraft Commander'});
                profile.save();
                const role = message.guild.roles.find(r => r.id === vars.CHEIF_SPACESHIP_COMMANDER)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Cheif SpaceShip Commander!')
            } else {
                message.channel.send(`You don't have enough points! You need ${1750 - profileData.points} more!`)
            }
        } else if(member.roles.cache.find(r => r.id === vars.SPACECRAFT_COMMANDER)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 1400){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 1400
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Senior SpaceCraft Commander'});
                profile.save();
                const role = message.guild.roles.find(r => r.id === vars.SENIOR_SPACECRAFT_COMMANDER)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Senior SpaceCraft Commander!')
            } else {
                message.channel.send(`You don't have enough points! You need ${1400 - profileData.points} more!`)
            }
        } else if(member.roles.cache.find(r => r.id === vars.MASTER_SERGEANT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 1050){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 1050
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'SpaceCraft Commander'});
                profile.save();
                const role = message.guild.roles.find(r => r.id === vars.SPACECRAFT_COMMANDER)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to SpaceCraft Commander!')
            } else {
                message.channel.send(`You don't have enough points! You need ${1050 - profileData.points} more!`)
            }
        } else if(member.roles.cache.find(r => r.id === vars.TECHNICAL_SERGEANT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 750){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 750
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Master Sergeant'});
                profile.save();
                const role = message.guild.roles.find(r => r.id === vars.MASTER_SERGEANT)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Master Sergeant!')
            } else {
                message.channel.send(`You don't have enough points! You need ${750 - profileData.points} more!`)
            }            
        } else if(member.roles.cache.find(r => r.id === vars.SENIOR_SPACECRAFT_AGENT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 500){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 500
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Technical Sergeant'});
                profile.save();
                const role = message.guild.roles.find(r => r.id === vars.TECHNICAL_SERGEANT)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Technical Sergeant!')
            } else {
                message.channel.send(`You don't have enough points! You need ${500 - profileData.points} more!`)
            }            
        } else if(member.roles.cache.find(r => r.id === vars.SPACECRAFT_AGENT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 300){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 300
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Senior SpaceCraft Agent'});
                profile.save();
                const role = message.guild.roles.find(r => r.id === vars.SENIOR_SPACECRAFT_AGENT)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Senior SpaceCraft Agent!')
            } else {
                message.channel.send(`You don't have enough points! You need ${300 - profileData.points} more!`)
            }            
        } else if(member.roles.cache.find(r => r.id === vars.SENIOR_ASTRONAUT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 150){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 150
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'SpaceCraft agent'});
                profile.save();
                const role = message.guild.roles.find(r => r.id === vars.SPACECRAFT_AGENT)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to SpaceCraft Agent!')
            } else {
                message.channel.send(`You don't have enough points! You need ${150 - profileData.points} more!`)
            }            
        } else if(member.roles.cache.find(r => r.id === vars.ASTRONAUT)){
            const profileData = await profileModel.findOne({ userID: user})
            if(profileData.points >= 50){
                message.channel.send('Upgrading your rank!')
                const newPoints = profileData.points - 50
                let profile = await profileModel.findOneAndUpdate({
                    userID: user,
                }, {points: newPoints, rank: 'Senior Astronaut'});
                profile.save();
                const role = message.guild.roles.find(r => r.id === vars.SENIOR_ASTRONAUT)
                member.roles.add(role);
                message.channel.send('Upgraded your rank to Senior Astronaut!')
            } else {
                message.channel.send(`You don't have enough points! You need ${50 - profileData.points} more!`)
            }            
        }
    }
}