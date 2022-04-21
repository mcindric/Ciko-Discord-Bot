module.exports = {
    name: "roll",
    description: "bacanje kockice 1d20, 1d12, 1d10, 1d8, 1d6, 1d4",
    execute(message, args){
       
        if(!args [0]){           
            message.reply("you rolled " + rollDice(1,20));
        } else {
            const rollArgs = args[0].toLowerCase().split("d");                                              //pretvaranje u zapis malim slovima i dijeljenje argumeta separatorom "d".
            const numberofDice = parseInt (rollArgs[0]);                                                    //pretvaranje elementa polja u integer.
            const numberofDiceSides = parseInt (rollArgs[1]);                                               //pretvaranje elementa polja u integer.
            if ((numberofDice <= 0) || (numberofDice > 10)) {                                               //if uvjet za ograničenje broja kockica od 1 do 10.
                message.reply("You entered incorect number of dice. Valid numbers are from 1 to 10.");
                return;
            }
            var DiceArray = [];                
            switch (numberofDiceSides){
                case 4:
                    DiceArray = rollDice(numberofDice, numberofDiceSides);
                    message.reply("you rolled " + DiceArray +"\nsum of your rolls: " + sumOfArrayElements(DiceArray));
                    break;
                case 6:
                    DiceArray = rollDice(numberofDice, numberofDiceSides);
                    message.reply("you rolled " + DiceArray +"\nsum of your rolls: " + sumOfArrayElements(DiceArray));
                    break;
                case 8:
                    DiceArray = rollDice(numberofDice, numberofDiceSides);
                    message.reply("you rolled " + DiceArray +"\nsum of your rolls: " + sumOfArrayElements(DiceArray));
                    break;
                case 10:
                    DiceArray = rollDice(numberofDice, numberofDiceSides);
                    message.reply("you rolled " + DiceArray +"\nsum of your rolls: " + sumOfArrayElements(DiceArray));
                    break;
                case 12:
                    DiceArray = rollDice(numberofDice, numberofDiceSides);
                    message.reply("you rolled " + DiceArray +"\nsum of your rolls: " + sumOfArrayElements(DiceArray));
                    break;
                case 20:
                    DiceArray = rollDice(numberofDice, numberofDiceSides);
                    message.reply("you rolled " + DiceArray +"\nsum of your rolls: " + sumOfArrayElements(DiceArray));
                    break;
                default:
                    message.channel.send("Invalid number of dice faces! Valid numbers are: 4, 6, 8, 10, 12, 20.");
                    break;
            }
        } 
    }
}
function rollDice(nmbrofDice, nmbrofDiceSides) {
    var arrayNumberofDice = [];
    for (var index = 0; index < nmbrofDice; index++) {
        arrayNumberofDice[index] = Math.floor(Math.random() * nmbrofDiceSides) + 1;
    }
    return arrayNumberofDice;
}
function sumOfArrayElements(array1){
    var sum = 0;
    for (var index = 0; index < array1.length; index++) {
        sum = sum + array1[index];
    }
    return sum;
}