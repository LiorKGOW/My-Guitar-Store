import React from 'react';
import { waitFor, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

import GuitarGallery from '../GuitarGallery.js';

import { GUITARS_URL } from '../constants';
import { guitarData } from './fixtures';

test('expect true to be true, always start on the right foot :)', async () => {
  expect(true).toBe(true);
});

test('Loading the data from the server and presenting it to the screen', async () => {
  await axios.get.mockResolvedValueOnce(guitarData);
  const { unmount, getByText } = render(<GuitarGallery key={1} />);

  // check the correct url is called:
  expect(axios.get).toHaveBeenCalledWith(GUITARS_URL);
  expect(axios.get).toHaveBeenCalledTimes(1);

  // ensure the title of the page is presented in the page:
  expect(screen.getByText('Guitars For Sale:')).toBeInTheDocument();

  // Another option to test it using getByText that react-testing-library/render returns:
  const title = getByText(/Guitars For Sale:/);
  expect(title).toHaveTextContent('Guitars For Sale:');

  // ensure some content of the page is presented in the page (including name & price):
  await waitFor(() => screen.getByText('guitar1_test'));

  const element = getByText('guitar1_test');
  expect(element).toHaveTextContent('guitar1_test');
  expect(element).toBeInTheDocument();

  expect(screen.getByText('guitar2_test')).toBeInTheDocument();

  const elementContainingPrice = screen.getByText(/100/);
  expect(elementContainingPrice).toBeInTheDocument();
  expect(elementContainingPrice).toHaveTextContent(/Price/i);

  const anotherElementContainingPrice = screen.getByText(/200/);
  expect(anotherElementContainingPrice).toBeInTheDocument();
  expect(anotherElementContainingPrice).toHaveTextContent(/Price/i);
  await waitFor(() => screen.getByText('guitar1_test'));

  expect(screen.getByText('guitar1_test')).toBeInTheDocument();
  expect(screen.getByText('guitar2_test')).toBeInTheDocument();

  // unmnount the component from the DOM
  unmount();
});

test('AboutModal opens on click', async () => {
  await axios.get.mockResolvedValueOnce(guitarData);
  const { unmount } = render(<GuitarGallery />);

  // wait for the component to load:
  await waitFor(() => screen.getAllByText('Check me out'));
  // assign the first element of the array to button and test it:
  const button = screen.getAllByText('Check me out').shift();
  console.log(button);
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();

  // Q: no need to wait again?
  // Another way to test it, using getAllByRole:

  // const button2 = screen.getAllByRole('about-modal-button').shift();
  // const button2 = screen.getAllByRole('about-modal-button', { name: 'Check me out' });
  // console.log(button2);
  // expect(button2).not.toBeDisabled();

  // click on the button to open the AboutModal:
  fireEvent.click(button);
  // OR:
  // await userEvent.click(screen.getByText('Load Greeting'));

  // wait for the AboutModal to open:
  await waitFor(() => screen.findByText('Trademark and stuff'));
  expect(screen.getByText('Trademark and stuff')).toBeInTheDocument();

  // unmnount the component from the DOM
  unmount();
});
