var expect = require('chai').expect;
var functions = require('../functions.js');

describe('myMax', function() {
	it('should exist', function() {
		expect(functions.myMax).not.to.be.undefined;
	});

	it('should return the largest integer in an array containing two or more integers', function() {
        expect(functions.myMax([1, 1, 3, 2])).to.equal(3);
        expect(functions.myMax([7777])).to.equal(7777);
    });

	it('should throw an error if input is not an array', function() {
		expect(function() {functions.myMax(2)}).to.throw('Invalid Input');
	});

	it('should throw an error if input is an empty array', function() {
		expect(function() {functions.myMax([])}).to.throw('Invalid Input');
	});

	it('should throw an error if input is an array that contains a non-integer', function() {
		expect(function() {functions.myMax([1, 2, 'a'])}).to.throw('Invalid Input');
	});
	
});