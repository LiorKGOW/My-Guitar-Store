import React from 'react';
import { GalleryItem, Grid, GridItem, 
    Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';

const GuitarInfo = ({name, url, price, description}) => {

  return (
    <GalleryItem>
      <Card id={name} isFlat>
        <Grid md={6}>
          <GridItem>
            <img className="Guitar-Image" src={url} alt="Guitar Image"/>
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
}

export default GuitarInfo;
