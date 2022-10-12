/*

for more information read nodejs.dev dont refer nodejs.org if you are a beginer:

*/





//in the latest update of chalk it now only support import instead of require,
// that too only if the file's extention name is .mjs instead of .js

//chalk is used for coloring and bold ita
import chalk from 'chalk'

//figelt is used to inc or dec the size of text:
import figlet from 'figlet'

console.log(chalk.blue("hii this is a text !"));

console.log(chalk.red(chalk.bold(figlet.textSync("Hello in bold"))));