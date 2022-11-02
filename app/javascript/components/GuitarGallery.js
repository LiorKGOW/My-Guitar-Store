import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Title, TitleSizes, Gallery } from '@patternfly/react-core';
import GuitarInfo from './GuitarInfo';

// Loading the data from the server:

export const GuitarGallery = () => {
  const getGuitars = async () => {
    try {
      const response = await axios.get('/');
      if (response.data) {
        setGuitars(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    getGuitars();
  }, []);

  return (
    <div>
      <Title headingLevel="h1" size={TitleSizes['4xl']}>
        Guitars For Sale:
      </Title>
      <Gallery
        hasGutter
        minWidths={{
          md: '100px',
          lg: '150px',
          xl: '200px',
          '2xl': '300px'
        }}>
        {guitars.map(({ name, url, price, description }) => (
          <GuitarInfo key={name} name={name} url={url} price={price} description={description} />
        ))}
      </Gallery>
    </div>
  );
};
