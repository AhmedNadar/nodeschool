// 	REQUIRNMENT

// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
// The full path to the file to read will be provided as the first command-line argument.

// 	SOLUTION

// include fs module
var fs = require('fs');
// return a bufffer after reading a file syncchronously using process.argv
var buf = fs.readFileSync(process.argv[2]);
// convert that buf (arrays of data) to string then split it by '\n'
// remove that new element
var str = buf.toString().split('\n').length - 1;
console.log(str);


// OFFICIAL SOLUTION
/*
	var fs = require('fs')
	var contents = fs.readFileSync(process.argv[2])
	var lines = contents.toString().split('\n').length - 1
	console.log(lines)
*/
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
