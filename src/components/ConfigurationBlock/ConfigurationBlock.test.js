import React from 'react';
import ConfigurationBlock from './ConfigurationBlock';
import { render } from '../../test-utils';

it('renders ConfigurationBlock with a title', () => {
  const { getByText } = render(<ConfigurationBlock title="Title" />);
  const title = getByText('Title');
  expect(title.innerHTML).toEqual('Title');
});

it('renders ConfigurationBlock with children', () => {
  const { getByTestId } = render(<ConfigurationBlock><div data-testid="block-content">Block Content</div></ConfigurationBlock>);
  const content = getByTestId('block-content');
  expect(content.innerHTML).toEqual('Block Content');
});
