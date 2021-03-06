var expect = require('chai').expect,
    Unit = require('./../src/unit.js'),
    Apartment = require('./../src/apartment');

describe('Unit', function() {
  var avalon = new Apartment('555 5th Street'),
      unit = new Unit(236, avalon, 500, 1500);

  it ('should initially be empty', function() {
    expect(unit.tenant).to.eq(null);
  });

  describe('#available', function() {
    it ('should return true if unit is available', function() {
      expect(unit.available()).to.eq(true);
    });
  });

});