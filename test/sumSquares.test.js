var expect = require('chai').expect;
var functions = require('../functions.js');

describe('sumSquares', function() {
	it('should exist', function() {
		expect(functions.sumSquares).not.to.be.undefined;
	});


	it('should return 1 if the input is 1', function() {
		expect(functions.sumSquares(1)).to.equal(1);
	});

	it('should, for an input N, return the sum of the squares from 1 up to and including N', function() {
		expect(functions.sumSquares(3)).to.equal(14);
	});

	it('should throw an error if argument is 0,', function() {
		expect(function() {functions.sumSquares(0)}).to.throw('Invalid Input');
	});


	it('should throw an error if argument is less than 0,', function() {
		expect(function() {functions.sumSquares(-1)}).to.throw('Invalid Input');
	});

	it('should throw an error if argument is a floating point number,', function() {
		expect(function() {functions.sumSquares(1.33)}).to.throw('Invalid Input');
	});


});