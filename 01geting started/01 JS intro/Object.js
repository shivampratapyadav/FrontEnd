let obj = {
    name:"shivam",
    age:23,
    address:{
        house_number:24,
        colony:"Deepak Vihar",
        state:"Delhi",
    }
}

//to delete something:

delete obj.address

console.log(obj);

obj.address = {
    house_number:24,
    colony:"Deepak Vihar",
    state:"Delhi",
}

console.log(obj);


//for each loop:
for(let key in obj){
    console.log(obj[key]);
}


console.log(obj.age);
let data = "age";

//in this square bracket syntax, 
//either give a number value if data is accordingly, otherwise if key is string pass it with inverted commas.
//as it takes variable as input. or directly key with its typefor eg:

//console.log(obj[age]);//this will give error
console.log(obj["age"]);
//or
console.log(obj[data]);

//accessing a key which is not there:
//this will print undefined:
console.log(obj.abc);