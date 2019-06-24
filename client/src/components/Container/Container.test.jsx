import React from 'react';
import TestRenderer from 'react-test-renderer';
import Container from './Container';

const resultsData ={
    JourneyDetails :{
        originalplace: 'LHR',
        destinationplace:'EDI',
        cabinclass : 'economy',
        passengers : 2
      },
    ItineraryDetails:
    [ {
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
          agent: "EZY"
        }
      },
      {
        InBoundLeg : {
          ImageUrl:'BA.png',
          DepartureTime: '2019-06-14T22:25:00',
          DepAirport:'LHR',
          ArrivalTime : '2019-06-14T22:25:00',
          ArvAirport : 'EDI',
          Duration:100,
          Stops : 1
        },
        OutBoundLeg : {
          ImageUrl:'BA.png',
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
      }
    ]
};

describe('Container', () => {
    it('should render correctly', () => {
      const tree = TestRenderer.create(<Container results={resultsData} />).toJSON();
  
      expect(tree).toMatchSnapshot();
    });
  });
  