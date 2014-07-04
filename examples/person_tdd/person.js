var person = {
  firstName: 'Patricio',
  lastName: 'Mac Adden',
  fullName: function() { return this.firstName + ' ' + this.lastName; }
}

module.exports.person = person;
