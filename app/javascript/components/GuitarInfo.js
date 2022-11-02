import React from 'react';
import PropTypes from 'prop-types';
import {
  GalleryItem,
  Grid,
  GridItem,
  Card,
  CardTitle,
  CardBody,
  CardFooter
} from '@patternfly/react-core';

const GuitarInfo = ({ name, url, price, description }) => {
  return (
    <GalleryItem>
      <Card id={name} isFlat>
        <Grid md={6}>
          <GridItem>
            <img className="Guitar-Image" src={url} alt="Guitar Image" />
          </GridItem>
          <GridItem>
            <CardTitle>{name}</CardTitle>
            <CardBody>Price: {price}</CardBody>
            <CardFooter>Description: {description}</CardFooter>
          </GridItem>
        </Grid>
      </Card>
    </GalleryItem>
  );
};
GuitarInfo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default GuitarInfo;
