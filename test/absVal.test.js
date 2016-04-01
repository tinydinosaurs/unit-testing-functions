var expect = require('chai').expect;
var functions = require('../functions.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});

	it('should return a positive integer if input is a positive integer', function() {
        expect(functions.absVal(1)).to.equal(1);
    });

	it('should return a positive integer if input is a negative integer', function() {
        expect(functions.absVal(-1)).to.equal(1);
    });

    it('should throw an error if input is not a number', function() {
		expect(function() {functions.absVal('')}).to.throw('Invalid Input');
	});

    it('should throw an error if input is not an integer', function() {
		expect(function() {functions.absVal(3.14)}).to.throw('Invalid Input');
	});

});