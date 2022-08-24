function countWords(message){
    const wordLen = message.split(" ").length;
    console.log(wordLen);
  }
  countWords('Good morning, I love JavaScript.'); // should return 5