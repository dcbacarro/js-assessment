if ( typeof window === 'undefined' ) {
  require('../../app/async');
  var expect = require('chai').expect;
}

describe('async behavior', function() {
  it('you should be able to retrieve data from the server and return a sorted array of names', function(done) {
    var url = '/data/testdata.json';

    asyncAnswers.manipulateRemoteData(url).then(function(result) {
      expect(result).to.have.length(5);
      expect(result.join(' ')).to.eql('Adam Alex Matt Paul Rebecca');
      done();
    });
  });
});
