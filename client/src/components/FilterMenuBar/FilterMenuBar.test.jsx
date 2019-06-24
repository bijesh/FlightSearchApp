import React from 'react';
import TestRenderer from 'react-test-renderer';

import FilterMenuBar from './FilterMenuBar';

describe('FilterMenuBar', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<FilterMenuBar />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

