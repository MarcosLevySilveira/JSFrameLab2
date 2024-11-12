// Function 1: No return, just display a message
export function greetUser(firstName, lastName, message) {
    return ` ${firstName} ${lastName} ${message}`;  // Return the greeting message
}

// Function 2: Convert Gallons to Liters
export function convertToLiters(gallons) {
    return gallons * 3.78541;  // 1 gallon = 3.78541 liters
}

// Calculate the Cube of a Number
export function calculateCube(number) {
    return number * number * number;  // Cube of the input number
}

// Function 4: An advanced function (Generates Fibonacci Sequence)
export function advancedFunction() {
    const num = 10;
    let n1 = 0, n2 = 1, nextTerm;
    let sequence = 'Fibonacci Series: ';  // String to hold the series

    for (let i = 1; i <= num; i++) {
        sequence += `${n1} `;  // Append the current term to the sequence
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    document.getElementById("output").innerHTML += `<p>${sequence}</p>`;
}

