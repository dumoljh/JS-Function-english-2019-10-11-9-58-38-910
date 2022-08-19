// ## requirement 
    
// - Create a new main.js file and write a function that outputs the incoming argument string alphabetically.

// ```
// function alphabetSort(message){
//   // wirte your code here
// }
// alphabetSort('hello'); // should return 'ehllo'
// ```

function alphabetSort(message){
  
    return message.split('').sort().join('');

}
console.log(alphabetSort('hello')); // should return 'ehllo'