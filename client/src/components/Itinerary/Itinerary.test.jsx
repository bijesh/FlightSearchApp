import React from 'react';
import TestRenderer from 'react-test-renderer';

import Itinerary from './Itinerary';

const ItineraryData = {
  InBoundLeg : {
    ImageUrl:'EZY.png',
    DepartureTime: '2019-06-14T22:25:00',
    DepAirport:'LHR',
    ArrivalTime : '2019-06-14T22:25:00',
    ArvAirport : 'EDI',
    Duration:100,
    Stops : 1
  },
  OutBoundLeg : {
    ImageUrl:'EZY.png',
    DepartureTime: '2019-06-14T22:25:00',
    DepAirport:'LHR',
    ArrivalTime : '2019-06-14T22:25:00',
    ArvAirport : 'EDI',
    Duration:100,
    Stops : 1
  },
  BookingDetails : {
    price:100,
    agent: "BA"
  }
};

describe('Itinerary', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Itinerary itinerary={ItineraryData} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

