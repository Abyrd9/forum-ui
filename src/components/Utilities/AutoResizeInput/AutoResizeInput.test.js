import React from 'react';
import AutoResizeInput from './AutoResizeInput';
import { render } from '../../../test-utils';

it('expects container width to match input width', () => {
  const { getByTestId } = render(<AutoResizeInput value="something" />);
  const input = getByTestId("resize-input");
  const container = getByTestId("resize-container");
  console.log(container.clientWidth, input.clientWidth);
  expect(container.clientWidth).toEqual(input.clientWidth);
});
