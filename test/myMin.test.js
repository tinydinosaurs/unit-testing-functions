var expect = require('chai').expect;
var functions = require('../functions.js');

describe('myMin', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});

	it('should return the smaller of two provided positive integers', function() {
        expect(functions.myMin(1, 7777)).to.equal(1);
    	expect(functions.myMin(-1, -7777)).to.equal(-7777);
    	expect(functions.myMin(-1, 7777)).to.equal(-1);
    	expect(functions.myMin(-1, 0)).to.equal(-1);
    });

	it('should throw an error if one or both inputs are not numbers', function() {
		expect(function() {functions.myMin(2, 'a')}).to.throw('Invalid Input');
	});

	it('should throw an error if one or both inputs are not integers', function() {
		expect(function() {functions.myMin(2, 2.1415)}).to.throw('Invalid Input');
	});

	it('should throw an error if only one input is provided', function() {
		expect(function() {functions.myMin(2)}).to.throw('Invalid Input');
	});

});