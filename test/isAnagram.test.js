var expect = require('chai').expect;
var functions = require('../functions.js');

describe('isAnagram', function() {
	it('should exist', function() {
		expect(functions.isAnagram).not.to.be.undefined;
	});

	it('should compare the values of two arrays of equal length, return true if those values are anagrams, and return false if they are not', function() {
        expect(functions.isAnagram(['spit', 'eels', 'burp'],['pits', 'else', 'rube'])).to.deep.equal([true, true, false]);
    });

	it('should throw an error if argument arrays are empty', function() {
		expect(function() {functions.isAnagram([],[])}).to.throw('Invalid Input');
	});

	it('should throw an error if argument arrays are different lengths', function() {
		expect(function() {functions.isAnagram(['pits', 'eels'],['else'])}).to.throw('Invalid Input');
	});

	// it('should throw an error if argument arrays are different lengths', function() {
	// 	expect(function() {functions.isAnagram(['spit'],['pits,' 'else'])}).to.throw('Invalid Input');
	// });

});
