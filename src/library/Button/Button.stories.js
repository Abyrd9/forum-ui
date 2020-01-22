import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add('Stories', () => {
    const Divider = <span style={{ marginRight: '24px' }} />
    return (
      <>
        <Button>Base Button</Button>
        {Divider}
        <Button>Focused</Button>
        {Divider}
        <Button>Hovered</Button>
        {Divider}
        <Button>Pressed</Button>
        {Divider}
        <Button disabled>Disabled</Button>
        {Divider}
        <Button>Loading</Button>
        {Divider}
        <Button small>Small</Button>
      </>
    )
  });
