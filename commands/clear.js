const { AdminID } = require('../config.json');

module.exports = {
    name: 'clear',
    description: "Ova naredba briše poruke s Discord kanala, broj brisanja poruka ovisi o broju koji je unesen",
    execute (message, args) {
        if (!message.member.roles.cache.has(AdminID)) {            
            message.channel.send('You don\'t have premmision to use this command');
            return;
        }
        if (!args[0]) {
            message.reply('Error please define second arg');
            return;
        }
        message.channel.bulkDelete(args[0]);
    }
}