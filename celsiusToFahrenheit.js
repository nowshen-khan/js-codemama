/**
 * Celsius to Fahrenheit

Problem Statement: Write a program to convert temperature from Celsius to Fahrenheit.
Input: The input consists of a float number.
Output: Output will be the Fahrenheit value.
Constraints: The program should print the number with exactly two decimal points.

Example: Enter the temperature in Celsius
Input: 32
Output: The temperature in Fahrenheit is: 89.60
 */

function main(input) {
	/**
	 * Write JavaScript code from here
	 */
	const F = input * (9 / 5) + 32;
	console.log(`The temperature in Fahrenheit is: ${F.toFixed(2)}`);
}

//This code for Code-Mama playground
let input = "";
process.stdin.on("data", (chunk) => {
	input += chunk;
});

process.stdin.on("end", () => {
	main(input.trim());
});
