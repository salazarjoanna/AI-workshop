/**
* ai workshop is my version of linux head command example
* to run it we need to: node aiwsgrep.js <Pattern> <fileName>
* ie) node aiwshead.js server.log
*/

const fs = require('fs');
const path = require('path');


if (process.argv.length !==3) {
  console.log('Missing arguments');
  console.log (`Usage: Node ${path.basename(process.argv[1])} <fileName>`);
  return;
}

let fileName = process.argv[2];
let content = fs.readFileSync(fileName, 'utf-8');

let lines = content.split("\n");

for (let i = 0; i < 10; i++) {
  console.log(lines[i]);
}
