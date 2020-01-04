/* eslint-disable no-undef */
import React from 'react';
import PageTitle from './PageTitle';
import { render } from '../../test-utils';

it('renders PageTitle with a title and subtitle', () => {
  const { getByText } = render(<PageTitle title="Title" subtitle="Subtitle" />);
  const title = getByText('Title');
  const subtitle = getByText('Subtitle');
  expect(title.innerHTML).toEqual('Title');
  expect(subtitle.innerHTML).toEqual('Subtitle');
});
