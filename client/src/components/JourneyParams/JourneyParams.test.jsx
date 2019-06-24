import React from 'react';
import TestRenderer from 'react-test-renderer';
import JourneyParams from './JourneyParams';

const JourneyParamsData = {
  originalplace: 'LHR',
  destinationplace:'EDI',
  cabinclass : 'economy',
  passengers : 2
};

describe('JourneyParams', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<JourneyParams journey={JourneyParamsData} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
