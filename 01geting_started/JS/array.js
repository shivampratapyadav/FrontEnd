/*
//let arr =[];

let array = [1,2,3,4,5];

console.log(arr);

console.log(arr.length);

let i=0;

while(i<arr.length){
    
    console.log(array[i]);
    
    i++;
}

*/

let array = [1,2,3,4,5];

//push, unshift:
//push add at last
array.push("last");

console.log(array);
//unshift add at first:
array.unshift("first");
console.log(array);

//shift, pop

//shift remove at first:
array.shift();
console.log(array);

//pop remove at last:

array.pop();
console.log(array);


//splice and slice

console.log("slice method result  ",array.slice(2,4));

console.log("after slice array  : ",array);


//splice
console.log("splice metod result:", array.splice(2,2));
console.log(array);


console.log("indexOf tells you the index of the given element:",array.indexOf(5));
