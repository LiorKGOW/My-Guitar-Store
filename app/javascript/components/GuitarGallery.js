import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Title, TitleSizes, Gallery, Spinner } from '@patternfly/react-core';
import GuitarInfo from './GuitarInfo';
import { GUITARS_URL } from './constants';

const GuitarGallery = () => {
  // Loading the data from the server:

  const getGuitars = async () => {
    try {
      const response = await axios.get(GUITARS_URL);
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
        {guitars.length === 0 ? (
          <Spinner isSVG aria-label="Contents of the Guitar Gallery" aria-valuetext="Loading..." />
        ) : (
          guitars.map(({ id, name, url, price, description }) => (
            <GuitarInfo
              key={id}
              id={id}
              name={name}
              url={url}
              price={price}
              description={description}
              getGuitars={getGuitars}
            />
          ))
        )}
      </Gallery>
    </div>
  );
};

export default GuitarGallery;
