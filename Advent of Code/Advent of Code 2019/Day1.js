const fs = require('fs');
const path = require('path');

// First, get the contents of the input file for today's puzzle
const inputFilePath = path.join(process.env.TQ_AOC_INPUT_FOLDER, 'day1.txt');
const inputFileContents = fs.readFileSync(inputFilePath, 'utf-8');

// Next, let's put every line in the input file into an array
const input = inputFileContents.split('\n');
// If the last line is blank, remove it
if (input[input.length - 1].trim() === '') {
  input.pop();
}

// Replace the code below with the code you'll need to solve the puzzle!
console.log(Math.floor(input / 3) - 2);
console.log(`Your puzzle input contains ${input.length} lines.`);
