const leg = require('./Model/leg');
const bookingDetails = require('./Model/bookingDetails');
const journey = require('./Model/journey');

const find = (obj,prop,value) => {
    if(!obj) return null;
    return obj.find(i => i[prop] === value);
};

const buildResponse = (results) => {
    try {
       
        const {Itineraries,Legs,Agents,Places,Currencies,Query,Carriers} = results;

        const currencySymbol = Currencies[0].Symbol;
        const originPlace = find(Places,'Id', parseInt(Query.OriginPlace)).Code;
        const destinationPlace = find(Places,'Id', parseInt(Query.DestinationPlace)).Code;
        const journeyResult = {
            JourneyDetails:{},
            ItineraryDetails:[],
        };
        const ItineraryDetails = [];
        
        Itineraries.map((i) =>
        {
           const inboundleg = find(Legs,'Id', i.InboundLegId);
           const outboundleg = find(Legs, 'Id', i.OutboundLegId);

           const inDepPlace = find(Places, 'Id', inboundleg.OriginStation);
           const inArvPlace = find(Places,'Id', inboundleg.DestinationStation);
           const InCarriers = find(Carriers,'Id', inboundleg.Carriers[0]);

           const outDepPlace = find(Places, 'Id', outboundleg.OriginStation);
           const outArvPlace = find(Places, 'Id', outboundleg.DestinationStation);
           const outCarriers = find(Carriers,'Id', outboundleg.Carriers[0]);
           
           const agent = find(Agents, 'Id', i.PricingOptions[0].Agents[0]);
           const price = i.PricingOptions[0].Price;

           const Itinerary = {
                InBoundLeg: leg.createLeg(inboundleg,inDepPlace,inArvPlace,InCarriers),
                OutBoundLeg: leg.createLeg(outboundleg,outDepPlace,outArvPlace,outCarriers),
                BookingDetails: bookingDetails.createbookingDetails(agent.Name,price),
            };

            ItineraryDetails.push(Itinerary);
        })
        const journeyDetails = journey.createJourney(currencySymbol,originPlace,destinationPlace,Query);
       
        journeyResult.JourneyDetails = journeyDetails;
        journeyResult.ItineraryDetails = ItineraryDetails;

      return journeyResult;
    } catch (err) {
      throw err;
    }
  };
  
  module.exports = {
    buildResponse,
  };