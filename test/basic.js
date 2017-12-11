var mocha = require("mocha"),
	should  = require("should"),
	rocket = require("../");

describe("Rocket numbers.", function () {
	it("The 'wordToNumber' method should be a function.", function(done){
		rocket.wordToNumber.should.be.Function
		done();
	});

	it("The 'wordToNumber' method should output a number from the ordinal word 'seven'.", function(done){
		var _number = rocket.wordToNumber('seven');
		_number.should.be.Number
		done();
	});

	it("The 'wordToNumber' method should output a number from the cardinal word 'seventh'.", function(done){
		var _number = rocket.wordToNumber('seventh');
		_number.should.be.Number
		done();
	});

	it("The 'wordToNumber' method should output a number from the cardinal word 'first'.", function(done){
		var _number = rocket.wordToNumber('first');
		_number.should.be.Number
		done();
	});

	it("The 'wordToNumber' method should output a number from the cardinal word 'second'.", function(done){
		var _number = rocket.wordToNumber('second');
		_number.should.be.Number
		done();
	});

	it("The 'wordToNumber' method should output a number from the cardinal word 'one thousand six hundred'.", function(done){
		var _number = rocket.wordToNumber('one thousand six hundred');
		_number.should.be.Number
		done();
	});

	it("The 'wordToNumber' method should output a number from the cardinal word 'one thousand six hundredth'.", function(done){
		var _number = rocket.wordToNumber('one thousand six hundredth');
		_number.should.be.Number
		done();
	});
});