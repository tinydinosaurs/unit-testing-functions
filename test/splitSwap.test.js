var expect = require('chai').expect;
var functions = require('../functions.js');

describe('splitSwap', function() {
	it('should exist', function() {
		expect(functions.splitSwap).not.to.be.undefined;
	});

	it('should swap two halves of a provided array and return the new array', function() {
        expect(functions.splitSwap([1, 7, 3, 22, 4, 9])).to.deep.equal([22, 4, 9, 1, 7, 3]);
    });

	it('should return a given array unchanges if that array contains only one element', function() {
        expect(functions.splitSwap([1])).to.deep.equal([1]);
	});

	it('should throw an error if argument is an empty array', function() {
		expect(function() {functions.splitSwap([])}).to.throw('Invalid Input');
	});

});
