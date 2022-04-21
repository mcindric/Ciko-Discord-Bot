const { AdminID } = require('../config.json');

module.exports = {
    name: 'clear',
    description: "Ova naredba briše poruke s Discord kanala, broj brisanja poruka ovisi o broju koji je unešen",
    execute(message, args){
        if(message.member.roles.cache.has(AdminID)){
            
        if(!args[0]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[0]);}   
        else{
            message.channel.send('Yuo dont have premmision to use this command');
        }
    }
}