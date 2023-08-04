// Imports
const prompt = require('prompt-sync')();

// Prompt user for name 
let userInput = prompt('Please enter your name: ');

// Function & For Loop
function reverse(userInput) {

    // Create reverse variable to empty string
    let reverseWord = '';

    // Loop through name starting from the last charcter to the first
    for (let i = userInput.length - 1; i >= 0; i--) {

        // Take each character from userInput and add it to the reverseWord variable
        reverseWord += userInput[i];
    }
    //return
    return reverseWord;
}
// Console Log Function

console.log(`Your reversed word: ${reverse(userInput)}`);
