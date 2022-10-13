#!/usr/bin/env node

let fs = require("fs");
let inputArr = process.argv.slice(2);

// console.log(inputArr);


//separating options and files in different array:
let optionsArr = [];
let filesArr = [];
// identify -> options
for (let i = 0; i < inputArr.length; i++) {
    
    let firstChar = inputArr[i].charAt(0);
    
    if (firstChar == "-") {
        optionsArr.push(inputArr[i]);
    }
    
    else {
        filesArr.push(inputArr[i]);
    }
}

/*
console.log("optionsArr  : ", optionsArr);
console.log("\nfilesArr : ", filesArr);
*/


// options check
if(optionsArr.includes("-h")){
console.log(`
--------------------------------------------------------------------------------
## All Available Commands:
0- wcat -h                        => help! -> displays all the commands and edge cases of the project. 
1- wcat filepath                  => displays content of the file in the terminal ✔
2- wcat filepath1 filepath2 ...   => displays content of all files in the terminal(contactinated form) in the given order. ✔
3- wcat -s filepath               => convert big line breaks into a singular line break ✔
4- wcat -n filepath               => give numbering to all the lines  ✔
5- wcat -b filepath               => give numbering to non-empty lines  ✔
6- wcat filepath > filename2path  => put all the content of filename into filename2 by overriding and also creates ~~filename2~~ if it doesn't exist. ✔
7- wcat filepath1 >> filepath2    => append all the content of filepath1 into filepath2 ✔
8- wcat -s filename > filename2   =>get the file content of filename remove large spaces and save the output in filename2 ✔

We can mix and match the options.

## Edge cases:
1- If file entered is not found then it gives file does not exist error.
2- If -n and -b are 2 options given together then command will give you an error.
    
--------------------------------------------------------------------------------
`
);
return;
}

let isBothPresent = optionsArr.includes("-b") && optionsArr.includes("-n");
if (isBothPresent==true) {
    console.log("either enter -n or -b option");
    return;
}

// existence
for (let i = 0; i < filesArr.length; i++) {
    
    //    /buffer
    let isPresent = fs.existsSync(filesArr[i]);
    
    if (isPresent == false) {
        console.log(`file ${filesArr[i]} is not present`);
        return;
    }

}


// implementing read
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    
    //    /buffer
    let bufferContent = fs.readFileSync(filesArr[i]);
    content += bufferContent + "\n";

}

//console.log(content)
let contentArr = content.split("\n");
//console.log(contentArr);

// implementing -s command:
let isSPreset = optionsArr.includes("-s");
if (isSPreset == true) {
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i])
        }
    }
    contentArr = tempArr;
}


// implementing -n command:
let isNPresent = optionsArr.includes("-n");
if (isNPresent == true) {
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = `${i + 1} ${contentArr[i]} `;
    }
}
// console.log(contentArr.join("\n"));




// implementing -b command:
let isBPresent = optionsArr.includes("-b");
if (isBPresent == true) {

    let counter = 1
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            // contentArr[i] = `${i + 1} ${contentArr[i]} `;
            contentArr[i] = `${counter} ${contentArr[i]}`;
            counter++;
        }
    }
}



//console.log("`````````````````````````````````````````````````````````````````")
console.log(contentArr.join("\n"));
//console.log("`````````````````````````````````````````````````````````````````")