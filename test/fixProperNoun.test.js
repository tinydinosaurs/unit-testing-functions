var expect = require('chai').expect;
var functions = require('../functions.js');

describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});

	it('should take a lowercase string and capitalize the first letter', function() {
		expect(functions.fixProperNoun('texas')).to.equal('Texas');
	});

	it('should take an uppercase string and lowercase all but the first letter', function() {
		expect(functions.fixProperNoun('TEXAS')).to.equal('Texas');
	});

	it('should take sentence case string and keep it sentence case', function() {
		expect(functions.fixProperNoun('Texas')).to.equal('Texas');
	});

	it('should take a string with an uppercase last letter, convert that letter to lowercase, and uppercase the first letter', function() {
		expect(functions.fixProperNoun('texaS')).to.equal('Texas');
	});
	it('should take a string with a random uppercase letter, convert that letter to lowercase, and uppercase the first letter', function() {
		expect(functions.fixProperNoun('teXas')).to.equal('Texas');
	});

	it('should throw an error if input is not a string', function() {
		expect(function() {functions.fixProperNoun(2)}).to.throw('Invalid Input');
	});

	it('should throw an error if input is an empty string', function() {
		expect(function() {functions.fixProperNoun('')}).to.throw('Invalid Input');
	});

});