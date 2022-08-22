module.exports = {
    name: 'message',
    async execute(message, args){
        const profileModel = require('../models/messageSchema')
        const send = message.content.slice('9')
        const user = message.author.id;
        
        let DBmessage = await profileModel.create({
            userID: user,
            message: send
          });
          DBmessage.save();
      message.channel.send(`Sent a message!`)
    }
}