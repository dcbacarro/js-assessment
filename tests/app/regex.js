if ( typeof window === 'undefined' ) {
  require('../../app/regex');
  var expect = require('chai').expect;
}

describe('regular expressions', function() {
  it('Detect a number in a string', function() {
    expect(regexAnswers.containsNumber('abc123')).to.eql(true);
    expect(regexAnswers.containsNumber('abc')).to.eql(false);
  });
});
