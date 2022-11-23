import React from 'react';
import { waitFor, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import GuitarGallery from '../GuitarGallery.js';
import { guitarsUrl } from '../constants';
import { guitarData } from './fixtures';

test("show loader when it's fetching data, then render Guitars", async () => {
  await axios.get.mockResolvedValueOnce(guitarData);
  const { unmount, getByText } = render(<GuitarGallery />);

  // check the correct url is called:
  expect(axios.get).toHaveBeenCalledWith(guitarsUrl);
  expect(axios.get).toHaveBeenCalledTimes(1);

  // ensure the title of the page is presented in the page:
  expect(screen.getByText('Guitars For Sale:')).toBeInTheDocument();

  // Another option to test it using getByText that react-testing-library/render returns:
  const title = getByText(/Guitars For Sale:/);
  expect(title).toHaveTextContent('Guitars For Sale:');

  // ensure some content of the page is presented in the page:

  await waitFor(() => screen.getByText('Description: some description in guitar1_test'));

  expect(screen.getByText('Description: some description in guitar1_test')).toBeInTheDocument();
  expect(screen.getByText('Description: some description in guitar2_test')).toBeInTheDocument();

  // unmnount the component from the DOM
  unmount();
});
