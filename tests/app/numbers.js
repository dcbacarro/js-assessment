if ( typeof window === 'undefined' ) {
  require('../../app/numbers');
  var expect = require('chai').expect;
}

describe('numbers', function() {
  describe('decimals', function() {
    it('Multiply with precision', function() {
      expect(numbersAnswers.multiply(3, 0.1)).to.eql(0.3);
      expect(numbersAnswers.multiply(3, 0.2)).to.eql(0.6);
      expect(numbersAnswers.multiply(3, 0.0001)).to.eql(0.0003);
    });
  });
});
