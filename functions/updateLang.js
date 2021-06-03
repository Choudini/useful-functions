
/*
This function is not that useful, it just refresh the variable "reply" whenever I call it. You don't realy need this if you are ready to restart your program to 
apply a language change.
Or you can just create a manual command ¯\_(ツ)_/¯
*/

var reply = require(`./json/reply/en.json`)
function updateLang(){
    // Config is where I put the configuration of the bot
    Config.findOne({ details: 'test' }, async (err, config) => {
         reply = require(`./json/reply/${config.lang}.json`)
    })
}
