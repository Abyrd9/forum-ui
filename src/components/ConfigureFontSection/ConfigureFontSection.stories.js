import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('ConfigureFontSection', module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add('Stories', () => <div />);
