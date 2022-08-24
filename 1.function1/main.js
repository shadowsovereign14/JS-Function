function reverseString(message){
    let stringArr = [];
    for(let i = message.length - 1; i >= 0; i-- ) {
        stringArr.push(message.charAt(i))
    } 
    console.log(stringArr.join(""))
}
  reverseString('hello'); // should return 'olleh'