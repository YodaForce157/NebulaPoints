module.exports = async (message) => {
    const noProfile = require('./models/noProfileSchema')
    const profileModel = require('./models/profileSchema')
    const author = message.author
    const number = Math.floor(Math.random() * (5 - 1) + 1)
    if(number === 4){
        console.log('4')
        const profileData = await profileModel.findOne({ userID: author.id})
        if(!profileData){
            const noprofileData = await noProfile.findOne({ userID: author.id})
            if(noprofileData){
                return;
            } else {
            let noprofileinfo = await noProfile.create({
                userID: author.id,
                messaged: true
            });
            noprofileinfo.save().then(
                author.send("Hello there, I am Nebula, SpaceGalaxy's bot. I have seen you chatting but you have not gotten any points from it as you have not yet created a profile! to create a profile in bot commands in my server type +start! if you belive something is wrong please message YodaForce157#5785")
            )
            
        }} else {
            profileData.points = profileData.points + 1
            profileData.save()
        }
    }
}