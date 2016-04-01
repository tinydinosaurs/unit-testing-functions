var expect = require('chai').expect;
var functions = require('../functions.js');

describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});

	it('should return an item that is in a provided array', function() {
        expect([2, '1', 'a']).to.include(functions.randomElement([2, '1', 'a']));
    });

	it('should return an item that is in a provided array, even if there is only one item in the array', function() {
        expect(functions.randomElement([2])).to.equal(2);
    });

	it('should throw an error if input is not an array', function() {
		expect(function() {functions.randomElement('a')}).to.throw('Invalid Input');
	});

	it('should throw an error input is an empty array', function() {
		expect(function() {functions.randomElement([])}).to.throw('Invalid Input');
	});

});
