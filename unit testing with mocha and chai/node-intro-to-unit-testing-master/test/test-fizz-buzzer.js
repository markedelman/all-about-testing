const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('checks if input is a number', function(){

    const badInputs = ["hello", {}, []];
    badInputs.forEach(function (index) {
      fizzBuzzer(index).should.throw(Error);
    })
    


  })



})
