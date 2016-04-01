var expect = require('chai').expect;
var functions = require('../functions.js');

describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});

	it('should return the name of the month that maps to a number 1 to 12', function() {
        expect(functions.getMonth(5)).to.equal('May');
    });

	it('should throw an error if input is not a number', function() {
		expect(function() {functions.getMonth('a')}).to.throw('Invalid Input');
	});

	it('should throw an error if input is less than one', function() {
		expect(function() {functions.getMonth(0)}).to.throw('Invalid Input');
	});

	it('should throw an error if input is greater than 12', function() {
		expect(function() {functions.getMonth(13)}).to.throw('Invalid Input');
	});

});
