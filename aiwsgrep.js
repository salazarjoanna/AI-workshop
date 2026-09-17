/**
* ai workshop is my version of linux grep command example
* to run it we need to: node aiwsgrep.js <Pattern> <fileName>
* ie) node aiwsgrep.js "ERROR" server.log
*/

const fs = require('fs');
const path = require('path');


if (process.argv.length !==4) {
  console.log('Missing arguments');
  console.log (`Usage: Node ${path.basename(process.argv[1])} <Pattern> <fileName>`);
  return;
}

let fileName = process.argv[3];
let pattern = process.argv[2];
let content = fs.readFileSync(fileName, 'utf-8');

let lines = content.split("\n");

for (let line of lines) {
  if (line.includes(pattern))
    console.log(line);
}
