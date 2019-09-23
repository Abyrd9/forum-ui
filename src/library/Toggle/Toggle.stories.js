/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from './Toggle';

storiesOf('Toggle', module)
  .addDecorator(storyFn => <div style={{ padding: '100px' }}>{storyFn()}</div>)
  .add('Stories', () => (
    <div>
      <Toggle />
      <Toggle small />
      <Toggle large />
      <Toggle disabled />
    </div>
  ));
