import React, { useEffect } from 'react';
import { Title, TitleSizes, Gallery, Spinner } from '@patternfly/react-core';
import PropTypes from 'prop-types';
import GuitarInfo from './GuitarInfo';

const GuitarGallery = ({ guitars, getGuitars }) => {
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
            />
          ))
        )}
      </Gallery>
    </div>
  );
};
GuitarGallery.propTypes = {
  guitars: PropTypes.array.isRequired,
  getGuitars: PropTypes.func.isRequired
};

export default GuitarGallery;
