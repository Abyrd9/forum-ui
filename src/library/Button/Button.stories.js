import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add('Stories', () => <Button outline primary>Base Button</Button>);
