var expect = require('chai').expect;
var functions = require('../functions.js');

describe('findBoth', function() {
	it('should exist', function() {
		expect(functions.findBoth).not.to.be.undefined;
	});

	it('should return an array containing values common to two arrays provided as arguments', function() {
        expect(functions.findBoth([1, 7, 3, 22, 4], [7, 55, 9, 1])).to.deep.equal([1, 7]);
    });

	it('should return an empty array if there are no common elements', function() {
        expect(functions.findBoth([1, 7], [55, 9])).to.deep.equal([]);
	});

	it('should throw an error if only one argument is given', function() {
		expect(function() {functions.findBoth([3])}).to.throw('Invalid Input');
	});

	it('should throw an error if arguments are both empty arrays', function() {
		expect(function() {functions.findBoth([],[])}).to.throw('Invalid Input');
	});

});
