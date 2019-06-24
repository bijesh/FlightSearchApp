var expect = require('chai').expect;
var leg = require('../Model/leg');

describe('createLeg()', function () {
  it('should create a leg object', function () {
    
    // 1. ARRANGE
    const legInfo = {
        Id : "4eeb7165-e5d8-4eea-be73-dabee0ccb253",
        Departure : '2019-06-07T06:55:00',
        Arrival : '2019-06-09T06:55:00',
        Duration : 2,
        Stops : [1],
    };
    const depPlace = {
        Code : 'LHR'
    };
    const destPlace = {
        Code : 'EDI'
    };
    const carriers = {
      ImageUrl : 'ezy.png'
    };
    const expectedLeg = {
        Id: "4eeb7165-e5d8-4eea-be73-dabee0ccb253",
        DepAirport : 'LHR',
        ArvAirport : 'EDI',
        DepartureTime : '2019-06-07T06:55:00',
        ArrivalTime : '2019-06-09T06:55:00',
        Duration : 2,
        Stops : 1,
        ImageUrl : 'ezy.png',
    };

    // 2. ACT
    var actualLeg = leg.createLeg(legInfo, depPlace,destPlace,carriers);

    // 3. ASSERT
    expect(expectedLeg).to.deep.equal(actualLeg);

  });
});