
  const createJourney = (currencySymbol,originPlace,destinationPlace,query)=> {
      return{
            currencySymbol : currencySymbol,
            originalplace : originPlace,
            destinationplace : destinationPlace,
            passengers : query.Adults +  query.Children + query.Infants,
            cabinclass : query.CabinClass,
        };
};

module.exports = {
    createJourney
};