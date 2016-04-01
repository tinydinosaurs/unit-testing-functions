var expect = require('chai').expect;
var functions = require('../functions.js');

describe('insertDashes', function() {
	
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});

	it('should transform a sentence of two letters to a sentence containing two letters separated by a dash.', function() {
		expect(functions.insertDashes('hi')).to.equal('h-i');
	});

	it('should transform a sentence of one or more words to a sentence in which the characters in each word are separated by dashes.', function() {
		expect(functions.insertDashes('oh hi')).to.equal('o-h h-i');
	});

	it('should not put dashes between letters and punctuation, only other letters.', function() {
		expect(functions.insertDashes('oh hi!')).to.equal('o-h h-i!');
	});

	it('should throw an error if argument isn\'t a string', function() {
			expect(function() {functions.insertDashes(1)}).to.throw('Invalid Input');
	});
});