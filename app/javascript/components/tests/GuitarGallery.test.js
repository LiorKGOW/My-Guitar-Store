import React from 'react';
import { waitFor, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import GuitarGallery from '../GuitarGallery.js';
import { GUITARS_URL } from '../constants';
import { guitarData } from './fixtures';

test('rendering the GuitarGallery component and asserting for test mock data to be in the page', async () => {
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

  // unmnount the component from the DOM
  unmount();
});
