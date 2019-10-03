/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from './Toggle';
import { StoryBlock } from '../../../.storybook/config';

const FocusedToggle = () => {
  const ToggleRef = useRef();

  useEffect(() => {
    ToggleRef.current.focus();
  }, []);

  return <Toggle ref={ToggleRef} />;
};

storiesOf('Toggle', module).add('Stories', () => (
  <>
    <StoryBlock>
      <p>Large</p>
      <Toggle large />
    </StoryBlock>
    <StoryBlock>
      <p>Default</p>
      <Toggle />
    </StoryBlock>
    <StoryBlock>
      <p>Focused</p>
      <FocusedToggle />
    </StoryBlock>
    <StoryBlock>
      <p>Active</p>
      <Toggle checked />
    </StoryBlock>
    <StoryBlock>
      <p>Disabled</p>
      <Toggle disabled />
    </StoryBlock>
    <StoryBlock>
      <p>Small</p>
      <Toggle small />
    </StoryBlock>
  </>
));
