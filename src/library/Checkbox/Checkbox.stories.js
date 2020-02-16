import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { StoryContainer, StoryBlock } from '../../../.storybook/config';
import Checkbox from './Checkbox';

const DefaultCheckbox = props => {
  const [checked, toggleChecked] = useState(false);
  return <Checkbox checked={checked} handleOnChange={() => toggleChecked(!checked)} {...props}/>
}

storiesOf('Checkbox', module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add('Stories', () => 
    <>
      <StoryContainer>
        <h1 className="title">Default Checkbox</h1>
        <StoryBlock inline>
          <DefaultCheckbox  />
          <p>Default</p>
        </StoryBlock>
        <StoryBlock inline>
          <Checkbox focused />
          <p>Focused</p>
        </StoryBlock>
        <StoryBlock inline>
          <Checkbox hovered />
          <p>Hovered</p>
        </StoryBlock>
        <StoryBlock inline>
          <Checkbox checked />
          <p>Active</p>
        </StoryBlock>
        <StoryBlock inline>
          <Checkbox disabled />
          <p>Disabled</p>
        </StoryBlock>
      </StoryContainer>
      <StoryContainer>
        <h1 className="title">Primary Checkbox</h1>
        <StoryBlock inline>
          <DefaultCheckbox primary />
          <p>Default</p>
        </StoryBlock>
        <StoryBlock inline>
          <Checkbox primary focused />
          <p>Focused</p>
        </StoryBlock>
        <StoryBlock inline>
          <Checkbox primary hovered />
          <p>Hovered</p>
        </StoryBlock>
        <StoryBlock inline>
          <Checkbox primary checked />
          <p>Active</p>
        </StoryBlock>
        <StoryBlock inline>
          <Checkbox primary disabled />
          <p>Disabled</p>
        </StoryBlock>
      </StoryContainer>
    </>
  );