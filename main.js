import { greetUser, convertToLiters, calculateCube, advancedFunction } from './utils.js';

// Function to display messages on the HTML page
function displayOutput(message) {
    const outputDiv = document.getElementById("output");
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    outputDiv.appendChild(paragraph);
}

// Calling greetUser for each group member
displayOutput(greetUser('Marcos', 'Silveira', ', Welcome to Georgian College! '));
displayOutput(greetUser('Francielle', 'Goes', ', Welcome to Georgian College! '));

// Calling the convertToLiters function
const liters = convertToLiters(1);
displayOutput(`Converted to Liters: ${liters}`);

// Calling the calculateCube function
const cubeResult = calculateCube(9);
displayOutput(`The cube of the number is: ${cubeResult}`);

// Calling the advancedFunction to generate the Fibonacci sequence
advancedFunction();
