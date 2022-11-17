import React from 'react';
import { render, screen /*, waitForElement*/ } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import GuitarGallery from './GuitarGallery';
import { guitarsUrl } from './constants';

test("show loader when it's fetching data, then render Guitars", async () => {
  axios.get.mockResolvedValueOnce({
    data: [
      {
        name: 'guitar1_test',
        url: 'https://rukminim1.flixcart.com/image/416/416/acoustic-guitar/x/8/w/topaz-blue-signature-original-imaefec7uhypjdr9.jpeg?q=70',
        price: '100',
        description: 'some description in guitar1_test'
      },
      {
        name: 'guitar2_test',
        url: 'https://shop.brianmayguitars.co.uk/user/special/content/Antique%20Cherry%20a.jpg',
        price: '200',
        description: 'some description in guitar2_test'
      }
    ]
  });

  //show loader
  const { unmount, /*getAllByTestId,*/ getByText } = render(<GuitarGallery />);
  // expect(getByText(/loading.../i)).toBeInTheDocument();

  // check the correct url is called:
  expect(axios.get).toHaveBeenCalledWith(guitarsUrl);
  expect(axios.get).toHaveBeenCalledTimes(1);

  //   //check what's rendered in the row
  //  const rowValues = await waitForElement(() => getAllByTestId('row').map((row) => row.textContent));
  //  expect(rowValues).toEqual(['ali', 'abu']);

  const guitarDescriptions = await screen.findAllByText(/Description/i);
  // const guitarDescriptions = screen.findAllBy('Description');
  const expectedDescription = [
    'some description in guitar1_test',
    'some description in guitar2_test'
  ];
  // option 1:
  expect(guitarDescriptions).toEqual(expectedDescription);
  // option 2:
  // console.log(guitarDescriptions);
  // guitarDescriptions.forEach((description, index) => {
  //   expect(description).toBe(expectedDescription.at(index));
  // });

  // unmnount the component from the DOM
  unmount();
});
