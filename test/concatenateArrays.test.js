var expect = require('chai').expect;
var functions = require('../functions.js');

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;
	});

	it('should return a single array', function() {
		expect(functions.concatenateArrays([2, 3, 4], [5, 6, 7])).to.deep.equal([2, 3, 4, 5, 6, 7]);
	});

	it('should return an array that is the same length as the sum of its inputs', function() {
		expect(functions.concatenateArrays([1, 2], [3, 4, 5, 6]).length).to.equal([1, 2].length + [3, 4, 5, 6].length);
	});

	it('should accept empty arrays as inputs', function() {
		expect(functions.concatenateArrays([], [])).to.deep.equal([]);
	});

	it('should throw an error if it only gets one input', function() {
			expect(function() {functions.concatenateArrays([1, 2, 3])}).to.throw('Invalid Input');
	});

	it('should throw an error if one or both inputs are a type other than array', function() {
		expect(function() {functions.concatenateArrays(2, [4])}).to.throw('Invalid Input');
	});

});