const { joinVoiceChannel, createAudioResource, createAudioPlayer, AudioPlayerStatus } = require('@discordjs/voice');


var hours = 0;
var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var timerflag = 0;
var timerTimeout;

module.exports = {
    name: 'timer',
    description: "this is a timer command",
    async execute(message, args){
        
        const argsreset = args [0];        
         
        if(message.member.voice.channel){
            if(argsreset.toLowerCase() === 'reset' && timerflag === 1){
                
                clearTimeout(timerTimeout);
                hours = 0;
                minutes = 0;
                seconds = 0;
                miliseconds = 0;
                timerflag = 0;
                message.channel.send('Timer reset');

            } else {
                if(timerflag === 1){
                    message.channel.send('Timer has already been set!');
                } else {
                    if((0 <= args [0] && args [0] <= 6) && (0 <= args [1] && args [1] <= 60) && (0 <= args [2] && args [2] <= 60)){
                        hours = parseInt (args [0]);
                        minutes = (hours * 60) + parseInt (args [1]);
                        seconds = (minutes * 60) + parseInt (args [2]);
                        miliseconds = seconds * 1000;   
                        message.channel.send('Valid time has been set.');
                        timerflag = 1;
                        
                        timerTimeout = setTimeout( async function ( ) {
                            try{
                                const connection = await joinVoiceChannel({
                                    channelId: message.member.voice.channel.id,
                                    guildId: message.guild.id,                                  // spoji čiku u kanal iz kojeg je poslana poruka
                                    adapterCreator: message.guild.voiceAdapterCreator
                                });
                                const resource = createAudioResource ('./local files/The Screaming Sheep.mp3');
                                const player = createAudioPlayer();                                                 
                                connection.subscribe(player);   
                                player.play(resource);  // reproduciraj koza vrišti
                            
                                player.on(AudioPlayerStatus.Idle, () =>{
                                player.stop();
                                connection.destroy();
                            });
                            }
                            catch(error){
                                console.log(error);
                                message.channel.send("Čiko cannot find user in channel");
                            }
                                timerflag = 0;
                            
                        }, miliseconds);               
                    } else {
                        message.channel.send('Invalid timer arguments!');
                    }
                }
            }
        } else {
            message.channel.send('You must be in a VoiceChannel to use bot timer!');
        }
    }
}