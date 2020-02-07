import React from 'react';
import InputContainer from './InputContainer';
import { render } from '../../test-utils';

it('renders InputContainer with a title', () => {
  const { getByText } = render(<InputContainer title="Title" />);
  const title = getByText('Title');
  expect(title.innerHTML).toEqual('Title');
});

it('renders InputContainer with children', () => {
  const { getByTestId } = render(
    <InputContainer>
      <div data-testid="block-content">Block Content</div>
    </InputContainer>
  );
  const content = getByTestId('block-content');
  expect(content.innerHTML).toEqual('Block Content');
});
