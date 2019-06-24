import React from 'react';
import TestRenderer from 'react-test-renderer';
import Price from './Price';

const PriceDate={
price:100,
agent: "BA"
};

describe('Price', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Price bookingDetails={PriceDate} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

