# Ciko-Discord-Bot
This is simple Discord bot for rolling dice, playing local audio file after certain amount of time, clearing messages. 
## Installing the bot
  * Download ZIP file or clone repository with `git clone https://github.com/mcindric/Ciko-Discord-Bot.git Ciko-Discord-Bot-main`
  * Install [ffmpeg](https://ffmpeg.org/)
  * Install [node.js](https://nodejs.org/en/)
  * install [discord.js](https://discord.js.org/#/) module in folder where bot is located
  * You need to create and configure "config.json" file which should be located in same folder as "main.js"

  Content of "config.json" file:
  ```
  {
  "token": "XXX",
  "PREFIX": "XXX",
  "AdminID": "XXX"
  }
  ```
  Replace "XXX" values with bots token, prefix value which you want to use for command activation and AdminID(needed only for `clear` command) with your server adminID. 
  * run the bot using `node main.js`
