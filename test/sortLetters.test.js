var expect = require('chai').expect;
var functions = require('../functions.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters).not.to.be.undefined;
	});

	it('should return a single character string if given a single character input', function() {
        expect(functions.sortLetters('s')).to.equal('s');
    });

	it('should reorder a string of two or more characters alphabetically and return the sorted string', function() {
        expect(functions.sortLetters('silly')).to.equal('illsy');
    });

	it('should reorder a string of two or more characters, with both lower and uppercase letters, alphabetically and return the sorted string', function() {
        expect(functions.sortLetters('siLly')).to.equal('Lilsy');
    });

	it('should reorder a multi-word string alphabetically and remove spaces before returning a new string', function() {
        expect(functions.sortLetters('I am silly')).to.equal('Iaillmsy');
    });

    it('should throw an error if input is not a string', function() {
		expect(function() {functions.sortLetters(2)}).to.throw('Invalid Input');
	});

	it('should throw an error if input is an empty string', function() {
		expect(function() {functions.sortLetters('')}).to.throw('Invalid Input');
	});

});