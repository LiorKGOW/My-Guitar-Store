import React from 'react';
import { waitFor, render, screen /*, waitForElement*/ } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import GuitarGallery from '../GuitarGallery.js';
import { guitarsUrl } from '../constants';
import { guitarData } from './fixtures';
// import { act } from 'react-dom/test-utils/index.js';

test("show loader when it's fetching data, then render Guitars", async () => {
  await axios.get.mockResolvedValueOnce(guitarData);
  //show loader
  // act(() => {
  // });
  const { unmount /*, getAllByTestId*/, getByText, getByLabelText } = render(<GuitarGallery />);
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
  expect(screen.getByText('Guitars For Sale:')).toBeInTheDocument(); // -> passes

  // ensure some content of the page is presented in the page:

  // Option 2:
  const title = getByText(/Guitars For Sale:/);
  expect(title).toHaveTextContent('Guitars For Sale:'); // -> passes

  // // fails:
  // const galleryItem = getByLabelText(/galleryItem/);
  // expect(galleryItem).toHaveTextContent('Description: some description in guitar1_test');

  // const gallery = getByLabelText(/gallery/);
  // expect(gallery).toHaveTextContent('Description: some description in guitar1_test');

  // Option 1:
  // expect(screen.getByRole('GuitarInfo')).toHaveTextContent('some description in guitar1_test');
  await waitFor(() => screen.getByText('Description: some description in guitar1_test'));
  // await waitFor(() => screen.getByText('Description: some description in guitar2_test'));

  expect(screen.getByText('Description: some description in guitar1_test')).toBeInTheDocument();
  expect(screen.getByText('Description: some description in guitar2_test')).toBeInTheDocument();

  // unmnount the component from the DOM
  unmount();
});
