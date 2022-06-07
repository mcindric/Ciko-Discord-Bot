module.exports = {
    name: "rnd",
    description: "slučajan odabir broja iz danog intervala",   //?rnd 2,100
    execute(message, args){
        const rndArgs = args[0].toLowerCase().split(",");
        const minimal = parseInt (rndArgs[0]);
        const maximal = parseInt (rndArgs[1]);
        message.reply("Random number from interval [" + minimal + "," + maximal + "] is: " + rndPick(minimal, maximal));
    }
}
function rndPick(min, max) {
    var array1 = [];
    var index;
    for (index = 0; min <= max; index++) {
        array1[index] = min;
        min++;
        console.log("polje: " + array1[index]);
    }
    return array1[Math.floor(Math.random() * (index + 1))];
}