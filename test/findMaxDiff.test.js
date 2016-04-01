var expect = require('chai').expect;
var functions = require('../functions.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});


	it('should return the difference between two values if the array only contains two elements', function() {
		expect(functions.findMaxDiff([2, 1])).to.equal(1);
	});

	it('should return the largest difference between adjacent elements if the array contains three or more values', function() {
		expect(functions.findMaxDiff([6, 15, 1, 7, 12])).to.equal(14);
	});

	it('should throw an error if argument is an empty array,', function() {
		expect(function() {functions.findMaxDiff([])}).to.throw('Invalid Input');
	});


	it('should throw an error if argument is is an array with only one element,', function() {
		expect(function() {functions.findMaxDiff([1])}).to.throw('Invalid Input');
	});

	// it('should throw an error if argument contains a value that is not an integer,', function() {
	// 	expect(function() {functions.findMaxDiff([1, 2, 3.14])}).to.throw('Invalid Input');
	// });


});