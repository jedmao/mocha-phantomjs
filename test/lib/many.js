// Generated by CoffeeScript 1.3.3
(function() {
  var expect;

  expect = (typeof chai !== "undefined" && chai !== null ? chai.expect : void 0) || require('chai').expect;

  describe('Many Passing', function() {
    var n, _i, _results;
    _results = [];
    for (n = _i = 1; _i <= 500; n = ++_i) {
      _results.push(it("passes " + n, function() {
        return expect(n).to.equal(n);
      }));
    }
    return _results;
  });

}).call(this);
