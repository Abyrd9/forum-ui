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
        <Button primary>Base Button</Button>
        {Divider}
        <Button primary>Focused</Button>
        {Divider}
        <Button primary>Hovered</Button>
        {Divider}
        <Button primary>Pressed</Button>
        {Divider}
        <Button primary disabled>Disabled</Button>
        {Divider}
        <Button primary loading>Loading</Button>
        {Divider}
        <Button primary small>Small</Button>
      </>
    )
  });
