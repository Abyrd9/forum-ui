import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import ForumUiProvider from '../src/assets/ForumUiProvider';

addDecorator(storyFn => (
  <ForumUiProvider>
    <div style={{ padding: '100px' }}>{storyFn()}</div>
  </ForumUiProvider>
));

configure(require.context('../src', true, /\.stories\.js$/), module);
