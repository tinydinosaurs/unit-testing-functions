/*
 * PROBLEM `checkData`: (normal)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 // input: string
 // output: boolean
 // example arg: 'hello'
 // expected outcome: false


function checkData(inputString) {
	// your code goes here
	if(typeof inputString === 'string') {
		return inputString.length === 3;
	} 
	throw new Error('Invalid Input');
}

/*
 * PROBLEM `concatenateArrays`: (normal)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: two arrays
// output: one array
// example args: [1, 2, 3, 4], [5, 6, 7, 8]
// expected outcome: [1, 2, 3, 4, 5, 6, 7, 8]

function concatenateArrays(a, b) {
	// your code goes here
	 if(b === undefined) {
	 	throw new Error('Invalid Input')
	 }

	 if(!Array.isArray(a) || !Array.isArray(b)) {
		throw new Error('Invalid Input');
	}

	 return a.concat(b);
}

/*
 * PROBLEM `fixProperNoun`: (normal)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: string
// output: string
// example arg: 'teXas'
// expected outcome: 'Texas'

function fixProperNoun(noun) {
	// your code goes here
	if(typeof noun !== 'string') {
		throw new Error('Invalid Input');
	}

	if(noun === '') {
		throw new Error('Invalid Input');
	}

	var properNoun = noun.toLowerCase();
	
	return properNoun.charAt(0).toUpperCase() + properNoun.substring(1, properNoun.length)
}

/*
 * PROBLEM `sortLetters`: (normal)
 * Write a function called `sortLetters` that returns a string that sorts all
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: string
// output: string
// example arg: 'silly'
// expected outcome: 'illsy'


function sortLetters(inputString) {
	// your code goes here

	if(typeof inputString !== 'string') {
		throw new Error('Invalid Input');
	}

	if(inputString === '') {
		throw new Error('Invalid Input');
	}
	return inputString.split('').sort().join('').trim();
}

/*
 * PROBLEM `absVal`: (normal)
 * Write a function called `absVal` that return the absolute value of a given
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: number
// output: number
// example arg: -2
// expected outcome: 2

function absVal(integer) {
	// your code goes here
	if(typeof integer !== 'number') {
		throw new Error('Invalid Input');
	}

	if(Math.round(integer) !== integer) {
		throw new Error('Invalid Input');
	}

	if(integer >= 0) {
		return integer;	
	} else {
		return 0 - integer;
	}
}

/*
 * PROBLEM `myMin`: (normal)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 // input: two numbers
 // output: one number
 // example arg: 7, 2022
 // expected outcome: 7

 function myMin(num1, num2) {
 	if(num2 === undefined) {
 		throw new Error('Invalid Input');
 	}

	if(Math.round(num1) !== num1) {
	 	throw new Error('Invalid Input');
	}

	if(Math.round(num2) !== num2) {
		 	throw new Error('Invalid Input');
	}

 	if(!typeof num1 === 'number') {
 		throw new Error('Invalid Input'); 		
 	}

 	if(num1 <= num2) {
 		return num1;
 	} else {
 		return num2;
 	}
 }

/*
 * PROBLEM `myMax`: (normal) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers and returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */

// input: array
// output: number
// example arg: [1, 1, 3, 5, 8, 13, 21, 34, 55]
// expected outcome: 55

function myMax(inputArray) {
	if(inputArray[0] === undefined) {
		throw new Error('Invalid Input')	
	}

	inputArray.sort();
	if(typeof inputArray[inputArray.length -1] !== 'number') {
		throw new Error('Invalid Input')
	}
	return inputArray[inputArray.length - 1];
}
/*
 * PROBLEM `getMonth`: (normal)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: number
// output: string
// example arg: 5
// expected outcome: 'May'

function getMonth(num) {
	var year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	if(typeof num !== 'number') {
 		throw new Error('Invalid Input'); 		
 	}

 	if(num <=0 || num > 12) {
 		throw new Error('Invalid Input');
 	}

 	return year[num - 1];
}

/*
 * PROBLEM `randomElement`: (normal)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */

// input: array
// output: number, string, boolean, array, function, or object
// example arg: [3, 'bunnies', ['are', 'plenty'], {hi: 'bunny, hello: 'rabbit'}]
// expected outcome: ['are', 'plenty']

function randomElement(arr) {
	var randomIndex = Math.floor(Math.random() * arr.length);

	if(!Array.isArray(arr)) {
		throw new Error('Invalid Input');
	}

	if(arr[0] === undefined) {
		throw new Error('Invalid Input');
	}
	return arr[randomIndex];
}
/*
 * PROBLEM `studentPairs`: (normal)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */

 // input: an array
 // output: an array of arrays
 // example arg: ['Dana', 'Will', 'Jen', 'Martin']
 // expected outcome: [['Dana', 'Jen'], ['Will', 'Martin']]

 function studentPairs(studentArray) {

 }

/*
 * PROBLEM `sumSquares`: (normal)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: number > 0
// output: number
// example arg: 3
// expected outcome: 14

function sumSquares(num) {
	var total = 0;
	
	if(Math.round(num) !== num) {
		throw new Error('Invalid Input');
	}

	if(num === 0) {
		throw new Error('Invalid Input');
	}

	if(num < 0) {
			throw new Error('Invalid Input');
		}

	for(i = num; i > 0; i--) {
		total += i*i;
	}
	return total;
}
/* 
 * PROBLEM `findMaxDiff`: (normal)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 // input: array
 // output: number
 // example arg: [6, 15, 1, 7, 12]
 // expected outcome: 14

function findMaxDiff(numArray) {
	var maxDiff = 0;
	
	if(numArray[0] === undefined) {
		throw new Error('Invalid Input');
	}

	if(numArray[1] === undefined) {
			throw new Error('Invalid Input');
		}

	for(var i = 1; i < numArray.length; i++) {
		if(Math.abs(numArray[i] - numArray[i-1]) > maxDiff) {
			maxDiff = Math.abs(numArray[i] - numArray[i-1]);
		}
	}
	return maxDiff;
}

/*
 * PROBLEM `insertDashes`: (normal)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: string of more than one letter
// output: string
// example arg: 'goodbye blue monday'
// expected outcome: 'g-o-o-d-b-y-e b-l-u-e m-o-n-d-a-y'

function insertDashes(myString) {

}

/*
 * PROBLEM `mySubstring`: (normal)
 * Implement a function called `mySubstring` that can output the substring of
 * the given string within specified bounds.
 *
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 *
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: a string and two numbers (maybe one number with an optional third argument of type number)
// output: string
// example arg: 'hello', 0, 3
// expected outcome: 'hell'

function mySubstring(myString, num1, num2) {

}
/*
 * PROBLEM `splitSwap`: (hard)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 *
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: array
// output: array
// example arg: ;[1, 'blarg', 6, 'a', '2', 2]
// expected outcome: ['a', '2', 2, 1, 'blarg', 6]

function splitSwap(arr) {
	if(arr[0] === undefined) {
		throw new Error('Invalid Input');
	}

	splitIndex = Math.floor(arr.length / 2);
	return arr.slice(splitIndex).concat(arr.slice(0, splitIndex))
}


/*
 * PROBLEM `smallMultiples`: (hard)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 // can include 1 * 1

// input: two numbers
// output: number
// example args: (10, 3)
// expected outcome: 3 (3*1, 3*2, 3*3)

function smallMultiples(num1, num2) {

}
/*
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

// input: string
// output: string
// example arg: 'password'
// expected outcome: 'cnffjbeq'

function rot13(myString) {

}

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

 // input: string
 // output: string
 // example arg: 'cnffjbeq'
 // expected outcome: 'password'

function derot13(myString) {

}

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

// input: a string and an integer
// output: string
// example args: 'hello', 7
// expected outcome: 'olssv'

function rotn(myString) {

}

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 // input: two arrays of integers
 // output: an array of zero or more integers
 // example arg: [2, 3, 66, 2, 4], [1, 2, 3, 4]
 // expected outcome: [2, 4]

function findBoth(arr1, arr2) {
	var commonElements = [];



	return commonElements;
}

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: two arrays of integers
// output: number
// example arg: [2, 3, 66, 2, 4], [1, 2, 3, 4]
// expected outcome: 2


function countBoth(arr1, arr2) {

}

/*
 * PROBLEM `isDiagonalMatrix`: (nightmare)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal
 * matrix if all entries outside the main diagonal are zero (the diagonal from
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 // input: array of arrays
 // output: boolean
 /* example arg: 
		[
			[1, 0, 0],
   			[0, 2, 0],
   			[0, 0, 3]
 		]
 */
// expected outcome: true

function isDiagonalMatrix(matrix) {

}

/*
 * PROBLEM `isAnagram`: (nightmare) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal
 * lengths arr1 and arr2. The function should return a new array of the same
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: two arrays of equal length
// output: an array of the same length as the input arrays
// example arg: 
// 			['spit', 'eels', 'burp'],
// 			['pits', 'else', 'rube']
// expected outcome:
// 			[true, true, false]


function isAnagram(arr1, arr2) {
	if(arr1[0] === undefined || arr2[0] === undefined) {
		throw new Error('Invalid Input');
	}

	if(arr1.length !== arr2.length) {
		throw new Error('Invalid Input');
	}

	var anagramTruth = []

	arr1 = arr1.map(sortLetters);
	arr2 = arr2.map(sortLetters);

	for(i = 0; i < arr1.length; i++) {
		if(arr1[i] === arr2[i]) {
			anagramTruth.push(true);
		} else {
			anagramTruth.push(false);
		}
	}
	return anagramTruth;
} 

/*
 * PROBLEM `validateParentheses`: (nightmare) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

// input: a string that contains only (, ), [, ], {, or } 
// output: boolean
// example arg: '({([])})'
// expected outcome: true

function validateParentheses(parenString) {

}
/*
 * PROBLEM `flattenArray`: (nightmare) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */


 // input: array
 // output: array
 // example arg: [1, 2, ['a', 3], 'ww', 33]
 // expected outcome: [1, 2, 'a', 3, 'ww', 33]

/*
 * Do not modify the code below
 */
module.exports = {
	checkData: 				typeof checkData === 'undefined' ? undefined : checkData,
	concatenateArrays: 		typeof concatenateArrays === 'undefined' ? undefined : concatenateArrays,
	fixProperNoun: 			typeof fixProperNoun === 'undefined' ? undefined : fixProperNoun,
	sortLetters: 			typeof sortLetters === 'undefined' ? undefined : sortLetters,
	absVal: 				typeof absVal === 'undefined' ? undefined : absVal,
	myMin: 					typeof myMin === 'undefined' ? undefined : myMin,
	myMax: 					typeof myMax === 'undefined' ? undefined : myMax,
	getMonth: 				typeof getMonth === 'undefined' ? undefined : getMonth,
	randomElement: 			typeof randomElement === 'undefined' ? undefined : randomElement,
	studentPairs: 			typeof studentPairs === 'undefined' ? undefined : studentPairs,
	sumSquares: 			typeof sumSquares === 'undefined' ? undefined : sumSquares,
	findMaxDiff: 			typeof findMaxDiff === 'undefined' ? undefined : findMaxDiff,
	insertDashes: 			typeof insertDashes === 'undefined' ? undefined : insertDashes,
	mySubstring: 			typeof mySubstring === 'undefined' ? undefined : mySubstring,
	splitSwap: 				typeof splitSwap === 'undefined' ? undefined : splitSwap,
	smallMultiples: 		typeof smallMultiples === 'undefined' ? undefined : smallMultiples,
	rot13: 					typeof rot13 === 'undefined' ? undefined : rot13,
	derot13: 				typeof derot13 === 'undefined' ? undefined : derot13,
	rotn: 					typeof rotn === 'undefined' ? undefined : rotn,
	findBoth: 				typeof findBoth === 'undefined' ? undefined : findBoth,
	countBoth: 				typeof countBoth === 'undefined' ? undefined : countBoth,
	isDiagonalMatrix: 		typeof isDiagonalMatrix === 'undefined' ? undefined : isDiagonalMatrix,
	isAnagram: 				typeof isAnagram === 'undefined' ? undefined : isAnagram,
	validateParentheses:	typeof validateParentheses === 'undefined' ? undefined : validateParentheses,
	flattenArray: 			typeof flattenArray === 'undefined' ? undefined : flattenArray
};