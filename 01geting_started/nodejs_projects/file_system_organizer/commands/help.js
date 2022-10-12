// Help fn 
function helpFn() {
    console.log(`
    List of All the commands:
                fso tree : This displays the tree structure of the directory.
                fso organize "directoryPath" : This organizes the files based on its type.
                fso help : this will list all commands available.
                `);
}

//we are exporting the above help function by writing below code and will require it
//in main file, see there how i am using the below exported function by requiring the module and catching it in an object.

module.exports={
    helpKey: helpFn
}