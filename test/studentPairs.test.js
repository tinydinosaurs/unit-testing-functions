var expect = require('chai').expect;
var functions = require('../functions.js');

describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});

	// it('should return an array containing arrays of randomly selected student pairs', function() {
	// 	expect(functions.studentPairs(['Dana', 'Will', 'Jen', 'Martin'])).to.be.oneOf([['Dana', 'Will'], ['Jen', 'Martin']], [['Dana', 'Jen'], ['Will', 'Martin']], [['Dana', 'Martin'], ['Will', 'Jen']]);
	// });
	it('should return an array containing an array with the name of a single student if there is only one student in the original array', function() {
		expect(functions.studentPairs([['Dana']]).to.deep.equal(['Dana']));
	});

	it('should return an array with containing one array with the names of two students if there are only two students in the original array', function() {
		expect(functions.studentPairs(['Dana', 'Will'])).to.deep.equal([['Dana', 'Will']]);
	});

// see .members(set) chai documentations: http://chaijs.com/api/bdd/#method_members

	// it('should return an item that is in a provided array', function() {
 //        expect([2, '1', 'a'])to.include(functions.randomElement([2, '1', 'a']));
 //    });

	// it('should throw an error if input is not an array', function() {
	// 	expect(function() {functions.randomElement('a')}).to.throw('Invalid Input');
	// });

	// it('should throw an error input is an empty array', function() {
	// 	expect(function() {functions.randomElement([])}).to.throw('Invalid Input');
	// });

});
