

// More explanation in the Wiki page about why you might need this.
function getAWord(wordId, message) {
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
        return reply.SYNTAX_ERROR
    }
}
