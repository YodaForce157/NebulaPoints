module.exports = {
    name: 'give',
    async execute(message, args){
        const profileModel = require('../models/profileSchema')
        if(message.member.roles.cache.find(r => r.id === '679636794060308565')){
            const target = message.mentions.users.first();
            if(!target){
                message.channel.send('Please mention a user to give the points to!')
            } else {
            const pointsAmmount = parseInt(args[1])
            const profileData = await profileModel.findOne({ userID: target.id})
            if(!profileData){
                message.channel.send('Player does not have a profile!')
            } else {
                profileData.points = profileData.points + pointsAmmount
                profileData.save()
            }}
            } else {
                message.channel.send('You don\'t have permisson to use this command!')
            }
        }
    }