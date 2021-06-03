/*
This function is quite useful, I use this everytime, maybe there's better way but, if I want my command to have multiple options I use this so I can read
each argument and do things.
*/
function getAWord(wordId, message, ignore) {
    // this function update the language 
    updateLang()
    // exclude the first word on 'message', in my case, the first word is the trigger.
    var args = message.content.trim().split(/ +/g)
    // just checking if you typed something after the trigger
    if (args.length > 1) {
        // Here for example, if wordId = 1, then isolate the first word after the trigger (the second word) 
        return args.splice(wordId, wordId).shift();
    } else {
        // reply is a json file containing some sentences.
        // the 'ignore' parameter is there if you want 'getAWord()' function to return nothing (undefined) when args length is equal to 1 or 0
        if (ignore != true) {
            throw message.channel.send(reply.SYNTAX_ERROR)
        }
    }
}

