var expect = require('chai').expect;
var functions = require('../functions.js');

describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});

	it('should return true if input has three characters', function() {
		expect(functions.checkData('hee')).to.be.true;
	});

	it('should return false if inpu has less than three characters', function() {
		expect(functions.checkData('ha')).to.be.false;
	});

	it('should return false if input has more than three characters', function() {
		expect(functions.checkData('haha')).to.be.false;
	});

	it('should throw an error if argument isn\'t a string', function() {
			expect(function() {functions.checkData(1)}).to.throw('Invalid Input');
	});
});