import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Star } from './example1';

test('Example Test 1: Render an h1 tag of Star', () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/Cool Star/);
  expect(h1).toHaveTextContent('Cool Star');
});
