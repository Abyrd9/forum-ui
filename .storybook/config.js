import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import ForumUiProvider from '../src/assets/ForumUiProvider';
import styled, { css } from 'styled-components';

export const StoryBlock = styled.div`
  ${props => {
    const { theme, inline } = props;
    return css`
      margin: 15px;
      .label {
        margin-bottom: 8px;
      }
      ${inline && css`
        display: flex;
        align-items: center;
        p {
          margin-left: 8px;
        }
      `}
    `;
  }}
`;

export const StoryContainer = styled.div`
  ${props => {
    const { theme = {} } = props;
    const { colors = {} } = theme;
    return css`
      position: relative;
      margin: 65px 100px 25px 100px;
      padding: 25px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      background-color: #fafbfd;
      border: 1px solid ${theme.colors.neutral[200]};
      border-radius: 15px;
      .title {
        color: ${colors.neutral[800]};
        position: absolute;
        font-size: 20px;
        top: -25px;
        left: 25px;
      }
    `;
  }}
`;

addDecorator(storyFn => <ForumUiProvider>{storyFn()}</ForumUiProvider>);

configure(require.context('../src', true, /\.stories\.js$/), module);
