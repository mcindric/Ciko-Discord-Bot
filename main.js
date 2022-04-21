const { Collection } = require('discord.js');
const { token, PREFIX } = require('./config.json');
const { generateDependencyReport } = require('@discordjs/voice');

const { Client, Intents } = require('discord.js');

const bot = new Client({ 
    intents: 
    [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ] 
});
const fs = require('fs');

bot.commands = new Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}


//console.log("chid :");

bot.on('ready', () =>{

    console.log(generateDependencyReport());    
    bot.user.setStatus('idle');
    bot.user.setActivity('Umiruće svjetlo');
    console.log('This bot is online!');
});

bot.on("messageCreate",async message =>{                                       

    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    bot.user.setStatus('online');
    const args = message.content.slice(PREFIX.length).split(/ +/); //implementaija prefiksa na početku argumenata
   // console.log("a0: " + args[0]);
     //   console.log("a1: " + args[1]);
      //  console.log("a2: " + args[2]);
       // console.log("a3: " + args[3]);
    const command = args.shift().toLowerCase(); // shift ukljanja prvi elemnt iz polja i vraća ga 
 //   console.log("a0: " + args[0]);
       // console.log("a1: " + args[1]);
       // console.log("a2: " + args[2]);
       // console.log("a3: " + args[3]);
    
    switch(command){
        case 'ping':
            bot.commands.get('ping').execute(message, args);
            break;
        case 'roll':
            bot.commands.get('roll').execute(message, args);
            break;
        case 'clear':
            bot.commands.get('clear').execute(message, args);
            break;
        case 'version':
            bot.commands.get('version').execute(message, args);
            break;
        case 'timer':
            bot.commands.get('timer').execute(message, args);
            break;
        case 'help':         
            bot.commands.get('help').execute(message, args);
            break;
        case 'rnd':         
            bot.commands.get('rnd').execute(message, args);
            break;         
    }
});
bot.login(token);