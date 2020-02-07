import React from 'react';
import { render } from '../../../test-utils';
import AutoResizeInput from './AutoResizeInput';

describe('AutoResizeInput', () => {
  it('Should exist in the DOM', () => {
    const { getByTestId } = render(<AutoResizeInput value="something" />);
    expect(getByTestId('resize-input')).toBeInTheDocument();
    expect(getByTestId('resize-container')).toBeInTheDocument();
  });
});
