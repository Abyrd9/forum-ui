import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Notification', module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add('Stories', () => <div />);