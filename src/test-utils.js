import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ForumUiProvider from './assets/ForumUiProvider';

const AllTheProviders = ({ children }) => {
  return <ForumUiProvider>{children}</ForumUiProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
