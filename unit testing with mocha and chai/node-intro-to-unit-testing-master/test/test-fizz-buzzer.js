const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	it('should return "fizz-buzz" if number is divisible by 5 and 3', function () {
		const fizzBuzzInputs = [15, 30, 60];
		fizzBuzzInputs.forEach(function (index) {
			fizzBuzzer(index).should.equal("fizz-buzz");
		})
	})

	it('should return "fizz" if number is divisible by 3', function () {
		const fizzInputs = [3, 6, 9];
		fizzInputs.forEach(function (index) {
			fizzBuzzer(index).should.equal("fizz");
		})
	})

	it('should return "buzz" if number is divisible by 5', function () {
		const buzzInputs = [5, 10, 25];
		buzzInputs.forEach(function (index) {
			fizzBuzzer(index).should.equal("buzz");
		})
	})


  	it('should return error if input in not a number', function(){
    	const badInputs = ["hello", {}, []];
 		badInputs.forEach(function(index) {
     		 (function() {
          fizzBuzzer(index)
      }).should.throw(Error);

    });
    


  });



});
