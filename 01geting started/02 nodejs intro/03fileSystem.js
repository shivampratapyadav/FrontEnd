let fs = require("fs");


/*

//read
let buffer = fs.readFileSync("problem.js");
console.log("bin data"+buffer);

//create
fs.openSync("xyz.txt","w");

//write
//IF NO FILE-> CREATE, 
//IF FILE EXISTS->will replace the content in it.
fs.writeFileSync("xyz.txt","hii this is a text for\nSHIVAM PRATAP\nNOOB_DEVELOPER");


//update
fs.appendFileSync("xyz.txt", "\nkoi baat nhi ye append kar diya hai through append file sync");


*/


//////////////////////////////////////////////////////////////////////

//DIRECTORY:

//to make a new directory:
//fs.mkdirSync("New Directory");

//fs.writeFileSync("New Directory/newfile.txt", "this is a new file");

/*
let content = fs.readdirSync("New Directory");

for(let i=0;i<content.length;i++){
    console.log("file", content[i], "is removed");
    //remove file
    fs.unlinkSync("New Directory/"+content[i]);
}

//remove folder:
fs.rmdirSync("New Directory");

*/


// fs.existsSync(); this returns true or false according to the file existeance:

console.log(fs.existsSync("newDir/this.txt"));

// fs.lstatSync();
//__dirname is a global keyword which tells us that under which folder you are working
let detailsObj = fs.lstatSync(__dirname+"\\03fileSystem.js");


//console.log(fs.lstatSync(__dirname+"\\03fileSystem.js"));
let ans= detailsObj.isFile();
console.log(ans); 

ans= detailsObj.isDirectory();
console.log(ans);