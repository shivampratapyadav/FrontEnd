let cp = require("child_process");



function opencalc(){
    console.log("opening calculator");
    cp.execSync("calc");
    console.log("opened calculator");
}


function openVsCode(){
    console.log("opening VS Code Editor");
    cp.execSync("code");
    console.log("opened VS Code Editor");
}

function openCrome(){
    console.log("opening Crome");
    cp.execSync("start chrome https:\\www.jagatgururampalji.org");
    console.log("opened Crome");
}

/*
opencalc();
openVsCode();
openCrome();
*/

// you want to execute a file and store its output in a variable.

let output = cp.execSync("node problem.js");
console.log(" "+output);