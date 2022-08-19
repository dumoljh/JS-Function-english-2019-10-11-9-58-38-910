// ## requirement 
    
// - Create a new main. Js file, write a function, implement the following function: a string output in reverse order.

// ```
// function reverseString(message){
//   // wirte your code here
// }
// reverseString('hello'); // should return 'olleh'
// ```

function reverseString(message){

    let a = "";
    for (let i = message.length - 1; i >= 0; i--) {
        a += message[i];
    }
    return a;
}

console.log(reverseString('hello')) // should return 'olleh'