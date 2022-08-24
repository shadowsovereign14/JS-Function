function reverseString(message){
    let stringArr = [];
    for(let i = message.length - 1; i >= 0; i-- ) {
        stringArr.push(message.charAt(i))
    } 
    return stringArr.join("");
}

function palindrome(message) {
    if(message === reverseString(message)) {
        console.log(true)
    } else {
       console.log(false)
    }
}

palindrome('hello');
palindrome('abcba');