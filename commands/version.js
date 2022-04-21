const {version} = require('../package.json');

module.exports = {
    name: 'version',
    description: "ova naredba ispisuje verziju bota",
    execute(message, args){
        message.channel.send('version ' + version);
    }
}