const createLeg = (objLeg, dep, arv,carriers) => {
    return {
        Id: objLeg.Id,
        DepAirport : dep.Code,
        ArvAirport : arv.Code,
        DepartureTime : objLeg.Departure,
        ArrivalTime : objLeg.Arrival,
        Duration : objLeg.Duration,
        Stops : objLeg.Stops.length,
        ImageUrl : carriers.ImageUrl,
    };

};

module.exports = {
    createLeg,
  };