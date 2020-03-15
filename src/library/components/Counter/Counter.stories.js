import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './Counter';

storiesOf('Counter', module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add('Stories', () => <Counter />);
