import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryContainer } from '../../../.storybook/config';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .addDecorator(storyFn => <div>{storyFn()}</div>)
  .add('Stories', () => 
    <StoryContainer>
      <Checkbox disabled />
    </StoryContainer>
  );