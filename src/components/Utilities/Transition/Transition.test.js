/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Transition from './Transition';

describe('Transition', () => {
  it('Should not exist in DOM if show prop is false', () => {
    const { getByTestId } = render(
      <div data-testid="container">
        <Transition />
      </div>
    );
    expect(getByTestId('container').childElementCount).toBe(0);
  });
  it('Should exist in DOM if show prop is true', () => {
    const { getByTestId } = render(
      <Transition show>
        <span />
      </Transition>
    );
    expect(getByTestId('transition').childElementCount).toBe(1);
  });
});
