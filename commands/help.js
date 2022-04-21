const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args){
        
    const exampleEmbed = new MessageEmbed()
	.setColor('#FF0000')
	.setTitle('Čiko helps!')
    .setAuthor("Čiko")
    .setDescription('Use prefix "?" for Čiko commands')
	.addFields(
        { name: 'LIST OF COMMANDS', 
            value: '------------------------------------'},
        { name: 'ping', 
            value: 'pong'},
        { name: 'version', 
            value: 'current version of Čiko'},
        { name: 'timer', 
            value: 'Timer format: hh mm ss. \nExample: ?timer 0 0 45'},
        { name: 'timer reset', 
            value: 'resets timer'},
        { name: 'clear', 
            value: 'clears a given number of messages from chat'},
        { name: 'roll', 
            value: 'Čiko rolls 1d20 for you'},
        { name: 'roll [number1]d[number2]', 
            value: 'Number1 can be from 1 to 10\nNumber2 can be: 4, 6, 8, 10, 12, 20\nExample: ?roll 5d8'},
	)
        message.author.send(
            {embeds: 
                [exampleEmbed]
            });
    }
}