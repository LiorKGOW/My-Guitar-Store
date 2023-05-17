import React from 'react';
import { waitFor, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GuitarInfo from '../GuitarInfo.js';
import { guitarPropsToRender } from './fixtures';

test('AboutModal Render & Functionality', async () => {
  const getGuitars = jest.fn();
  const { unmount } = render(<GuitarInfo {...guitarPropsToRender} getGuitars={getGuitars} />);

  // wait for the component to load:
  await waitFor(() => screen.getByText('Check me out'));

  const checkMeOutButton = screen.getByText('Check me out');
  expect(checkMeOutButton).not.toBeDisabled();

  // click on the button to open the AboutModal:
  fireEvent.click(checkMeOutButton);

  // wait for the AboutModal to open:
  await waitFor(() => screen.getByText('Trademark and stuff'));
  expect(screen.getByText('Trademark and stuff')).toBeInTheDocument();
  expect(screen.getByText(/Name:/i)).toBeInTheDocument();
  expect(screen.getByText(/Description:/i)).toBeInTheDocument();

  // Ensure the correct data is presented in the AboutModal:
  expect(screen.getByText(/some description in guitar1_test/i)).toBeInTheDocument();
  expect(screen.getByText('100')).toBeInTheDocument();

  // close the AboutModal:
  const closeAboutModalButton = screen.getByLabelText('Close Dialog');
  fireEvent.click(closeAboutModalButton);

  // wait for the AboutModal to close:
  await waitFor(() => expect(screen.queryByText('Trademark and stuff')).not.toBeInTheDocument());

  expect(getGuitars).toHaveBeenCalledTimes(0);

  // unmnount the component from the DOM
  unmount();
});
