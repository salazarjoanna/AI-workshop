This workshop contains two Node.js programs that recreate simplified versions of Linux commands.

The two commands are:

aiwsgrep.js: a simplified version of the Linux grep command
aiwshead.js:a simplified version of the Linux head command

Both programs use Node.js to read a text file and display information from the file in the terminal.

1. aiwsgrep.js

aiwsgrep.js is my version of the Linux grep command.

The program searches a file for a specific pattern. If a line contains the pattern, the program prints that line to the terminal.

For example, if the file contains:

INFO Server started
ERROR Database connection failed
INFO User logged in
ERROR File not found

and I search for ERROR, the program will display:

ERROR Database connection failed
ERROR File not found

How to run the command:
Requires a pattern and a file name-> node aiwsgrep.js <Pattern> <fileName>

Example:
node aiwsgrep.js "ERROR" server.log

How It Works:

1. Imports the fs module to work with files.
2. Imports the path module to get the program's file name.
3. Checks that the user entered the correct number of arguments.
4. Gets the pattern and file name from process.argv
5. Reads the file using fs.readFileSync()
6. Splits the file into separate lines.
7. Checks each line to see if it contains the pattern.
8. Prints the lines that contain the pattern.


2. aiwshead.js

aiwshead.js is my version of the Linux head command.

The program displays the first 10 lines of a file.

How to run the command:
Requires a file name-> node aiwshead.js <fileName>

Example:
node aiwshead.js server.log

How It Works:

1. Imports the fs module to work with files.
2. Imports the path module to get the program's file name.
3. Checks that the user entered a file name.
4. Gets the file name from process.argv
5. Reads the file using fs.readFileSync()
6. Splits the file into separate lines.
7. Uses a for loop to print the first 10 lines.

For loop:

for (let i = 0; i < 10; i++) {
  console.log(lines[i]);
}

starts at line 0 and continues until it reaches 10 lines.

Commands used during workshop:
fs — used to read files
path — used to work with file paths and the program name
process.argv — used to get arguments entered in the terminal
readFileSync() — reads the contents of a file
split() — separates the file contents into lines
includes() — checks whether a line contains a search pattern
for loop — goes through the lines of the file
console.log() — displays output in the terminal

AI usage:

During this assignment, AI was used to better understand the usage of the grep and head command. Throughout the execution of the code, there were some issues with the indexes when using process.argv and misspelling of readFileSync which did not allow for the proper reading of the file in the command syntax which AI helped to catch within the code and debug. 


