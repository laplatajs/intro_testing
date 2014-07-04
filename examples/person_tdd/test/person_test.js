var assert = require('assert');
var person = require('../person.js').person;

describe('person', function() {
  it('has a first name', function() {
    assert.equal('Patricio', person.firstName);
  });

  it('has a last name', function() {
    assert.equal('Mac Adden', person.lastName);
  });

  describe('fullName', function() {
    it("returns the person's full name", function() {
      assert.equal('Patricio Mac Adden', person.fullName());
    });
  });
});
