# Wcat 🚀🚀 

It is used to display or make a copy content of one or more files in the terminal itself:

## Commands:
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