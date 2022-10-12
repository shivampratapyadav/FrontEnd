let path = require("path");

//path.join();
// this directly joins the path name we don't have to take headache of backward or forward slashes.
/*
for(let i=1;i<=10;i++){
    let dirPathToMake = `Chapter-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(path.join(dirPathToMake,`readME${i}.md`), "# readme for "+`${dirPathToMake}`);
}

*/

let extn = path.extname(path.join(__dirname,"problem.js"));
console.log(extn);

let name = path.basename(__dirname);
console.log(name);

name = path.basename(path.join(__dirname,"abc.js"));
console.log(name);

