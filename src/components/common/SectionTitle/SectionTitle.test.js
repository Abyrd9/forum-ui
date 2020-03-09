import React from 'react';
import SectionTitle from './SectionTitle';
import { render } from '../../test-utils';

it('renders SectionTitle with a title and description (As String)', () => {
  const { getByText } = render(<SectionTitle title="Title" description="Description" />);
  const title = getByText('Title');
  const description = getByText('Description');
  expect(title.innerHTML).toEqual('Title');
  expect(description.innerHTML).toEqual('Description');
});

it('renders SectionTitle with a title and description (As Node)', () => {
  const { getByText, getByTestId } = render(
    <SectionTitle title="Title" description={<a data-testid="inner-div">Description</a>} />
  );
  const title = getByText('Title');
  const description = getByTestId('inner-div');
  expect(title.innerHTML).toEqual('Title');
  expect(description.innerHTML).toEqual('Description');
});
