import React from 'react';
import TestRenderer from 'react-test-renderer';
import Leg from './Leg';

const LegData = {
  ImageUrl:'EZY.png',
  DepartureTime: '2019-06-14T22:25:00',
  DepAirport:'LHR',
  ArrivalTime : '2019-06-14T22:25:00',
  ArvAirport : 'EDI',
  Duration:100,
  Stops : 1
};

describe('Leg', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Leg leg={LegData}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

