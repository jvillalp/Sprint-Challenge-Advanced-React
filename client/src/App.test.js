import React from 'react';
import {render } from '@testing-library/react';
import App from './App';

test('concise-test - renders contact from navbar', () => {
  const {getByText} = render(<App/>);
  getByText(/women/i);
});
