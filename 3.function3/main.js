function alphabetSort(message){
    let stringArr = [];
    for(let i = 0; i < message.length; i++ ) {
        stringArr.push(message.charAt(i))
    }
    stringArr.sort();
    console.log(stringArr.join(""))
}
  alphabetSort('hello'); // should return 'ehllo'