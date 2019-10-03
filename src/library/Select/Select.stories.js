/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';
import { StoryBlock } from '../../../.storybook/config';

const Story = () => {
  const [value, updateValue] = useState('');
  const list = [
    { value: 'Option 1', name: 'Option 1' },
    { value: 'Option 2', name: 'Option 2' },
    { value: 'Option 3', name: 'Option 3' },
    { value: 'Option 4', name: 'Option 4' },
    { value: 'Option 5', name: 'Option 5' },
  ];
  return (
    <Select
      placeholder="Placeholder"
      value={value}
      handleOnChange={updateValue}
      list={list}
      infoShow
      infoMssg={{ message: 'There was a problem with your input value.', color: '#FF1053' }}
    />
  );
};

storiesOf('Select', module).add('Stories', () => (
  <>
    <StoryBlock>
      <p>Base</p>
      <Story />
    </StoryBlock>
    <StoryBlock>
      <p>Focused</p>
      <Story />
    </StoryBlock>
    <StoryBlock>
      <p>Disabled</p>
      <Story />
    </StoryBlock>
  </>
));
