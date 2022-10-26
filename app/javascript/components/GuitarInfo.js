import React from 'react';
import { GalleryItem, Grid, GridItem, Card, CardTitle, CardBody, CardFooter,
  AboutModal, Button, TextContent, TextList, TextListItem } from '@patternfly/react-core';
    
import { logoUrl } from './const_urls';

const GuitarInfo = ({name, url, price, description}) => {

  const [isModalOpen, toggleModal] = React.useReducer(
    (isModalOpen) => !isModalOpen,
    false
  );

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
            <CardFooter>
              <Button variant="primary" onClick={toggleModal}>Check me out</Button>
            </CardFooter>
          </GridItem>
        </Grid>
      </Card>

      <AboutModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        trademark="Trademark and stuff"
        brandImageSrc={logoUrl}
        brandImageAlt="Guitar Image"
        productName={name}
        backgroundImageSrc={url}
      >
        <TextContent>
          <TextList component="dl">
            <TextListItem component="dt">Name: </TextListItem>
            <TextListItem component="dd">{name}</TextListItem>
            <TextListItem component="dt">Description: </TextListItem>
            <TextListItem component="dd">{description}</TextListItem>
            <TextListItem component="dt">Price: </TextListItem>
            <TextListItem component="dd">{price}</TextListItem>
          </TextList>
        </TextContent>
      </AboutModal>

    </GalleryItem>
  );
}

export default GuitarInfo;
