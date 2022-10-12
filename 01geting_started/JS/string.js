 let singleQuotesString = 'single quotes ki string';

 let doubleQuotesString = "double quotes ki string";


 console.log(singleQuotesString);
 console.log(doubleQuotesString);

 let char = singleQuotesString.charAt(4);
 let ascii = singleQuotesString.charCodeAt(4);
 let subStr = singleQuotesString.substring(2,8);
 
 console.log(char);
 console.log(ascii);
 console.log(subStr);


 let arrStr = singleQuotesString.split(" ");
 console.log(arrStr);

 let str = arrStr.join("$");
 console.log(str);

//trim: removes all the spaces instarting and end:
let strng = '      hii this is a string        ';

console.log(strng);

//trim does not change the original string:
console.log("strng after apllying trim method:",strng.trim());

console.log(strng);