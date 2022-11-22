import React from 'react';
import { render, screen /*, waitForElement*/ } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import GuitarGallery from '../GuitarGallery.js';
import { guitarsUrl } from '../constants';
import { guitarData } from './fixtures';

test("show loader when it's fetching data, then render Guitars", async () => {
  axios.get.mockResolvedValueOnce(guitarData);
  //show loader
  const { unmount /*, getAllByTestId, getByText*/ } = render(<GuitarGallery />);
  // expect(getByText(/loading.../i)).toBeInTheDocument();

  // check the correct url is called:
  expect(axios.get).toHaveBeenCalledWith(guitarsUrl);
  expect(axios.get).toHaveBeenCalledTimes(1);

  //   //check what's rendered in the row
  //  const rowValues = await waitForElement(() => getAllByTestId('row').map((row) => row.textContent));
  //  expect(rowValues).toEqual(['ali', 'abu']);

  // const guitarDescriptions = await screen.findAllByText(/Description/i);
  // // const guitarDescriptions = screen.findAllBy('Description');
  // const expectedDescription = [
  //   'some description in guitar1_test',
  //   'some description in guitar2_test'
  // ];
  // // option 1:
  // expect(guitarDescriptions).toEqual(expectedDescription);
  // option 2:
  // console.log(guitarDescriptions);
  // guitarDescriptions.forEach((description, index) => {
  //   expect(description).toBe(expectedDescription.at(index));
  // });

  // ensure the title of the page is presented in the page:
  expect(screen.getByText('Guitars For Sale:')).toBeInTheDocument();

  // ensure some content of the page is presented in the page:
  expect(screen.getByText('some description in guitar1_test')).toBeInTheDocument();
  expect(screen.getByText('some description in guitar2_test')).toBeInTheDocument();

  // unmnount the component from the DOM
  unmount();
});
