import React from 'react';
import { render } from '../../../test-utils';
import Loading from './Loading';

describe('Loading', () => {
  it('Should exist in the DOM', () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId('loading-icon')).toBeInTheDocument();
  });
});
