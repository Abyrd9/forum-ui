import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { faUserCircle } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './Input';
import { StoryBlock, StoryContainer } from '../../../.storybook/config';

const InputStory = props => {
  const [value, updateValue] = useState(props.value || '');

  return (
    <Input value={value} handleOnChange={({ target }) => updateValue(target.value)} {...props} />
  );
};

storiesOf('Input', module).add('Stories', () => (
  <StoryContainer>
    <StoryBlock>
      <p>Base</p>
      <InputStory placeholder="Placeholder" />
    </StoryBlock>
    <StoryBlock>
      <p>Focused</p>
      <InputStory placeholder="Base" value="Text Value" />
    </StoryBlock>
    <StoryBlock>
      <p>Disabled</p>
      <InputStory disabled placeholder="Placeholder" />
    </StoryBlock>
    <StoryBlock>
      <p>Icon</p>
      <InputStory placeholder="Username" Icon={<FontAwesomeIcon icon={faUserCircle} />} />
    </StoryBlock>
    <StoryBlock>
      <p>Errored</p>
      <InputStory
        placeholder="Placeholder"
        value="Incorrect Text Value"
        infoShow
        infoMssg={{ message: 'Something went wrong!', color: '#FF1053' }}
      />
    </StoryBlock>
    <StoryBlock>
      <p>Success</p>
      <InputStory
        placeholder="Placeholder"
        value="Succesful Text Value"
        infoShow
        infoMssg={{ message: 'Succesfully Validated!', color: '#84DBC7' }}
      />
    </StoryBlock>
  </StoryContainer>
));
