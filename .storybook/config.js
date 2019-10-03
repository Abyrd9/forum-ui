import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import ForumUiProvider from '../src/assets/ForumUiProvider';
import styled, { css } from 'styled-components';

export const StoryBlock = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      margin: 15px;
      p {
        margin-bottom: 8px;
      }
    `;
  }}
`;

const StoryContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      margin: 100px;
      padding: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      background-color: #fafbfd;
      border: 1px solid ${theme.colors.neutral[200]};
      border-radius: 15px;
    `;
  }}
`;

addDecorator(storyFn => (
  <ForumUiProvider>
    <StoryContainer>{storyFn()}</StoryContainer>
  </ForumUiProvider>
));

configure(require.context('../src', true, /\.stories\.js$/), module);
