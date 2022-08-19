// ## requirement 
    
// - Create a new main.js file and write a function that does the following: determine whether a string is a palindrome string. (Palindrome, a string read from the beginning as well as from the end. For example, abcba is a palindrome string.)

// ```
// function palindrome(message){
//   // wirte your code here
// }
// palindrome('hello'); // should return false
// palindrome('abcba'); // should return true
// ```

function palindrome(message){

    var len = message.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (message[i] !== message[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true