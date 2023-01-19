import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  GalleryItem,
  Grid,
  GridItem,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
  Modal,
  ModalVariant,
  Form,
  FormGroup,
  TextInput
} from '@patternfly/react-core';
import { getGuitarUrlWithId } from './constants.js';

const GuitarInfo = ({ id, name, url, price, description, getGuitars }) => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openFormModal = () => {
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };

  // Form Attributes useStates():
  const [nameValue, setNameValue] = useState(name);
  const [urlValue, setUrlValue] = useState(url);
  const [priceValue, setPriceValue] = useState(price);
  const [descriptionValue, setDescriptionValue] = useState(description);

  const cancelEditOfGuitar = () => {
    closeFormModal();

    // Repopulate the fields of the form with the original guitar's attributes:
    setNameValue(name);
    setUrlValue(url);
    setPriceValue(price);
    setDescriptionValue(description);
  };

  const updateGuitar = async () => {
    closeFormModal();

    const updatedGuitarUrl = getGuitarUrlWithId(id);

    try {
      await axios.put(updatedGuitarUrl, {
        name: nameValue,
        url: urlValue,
        price: priceValue,
        description: descriptionValue
      });
      getGuitars();
    } catch (error) {
      console.log('Server have encountered an error:');
      console.log(error);
    }
  };

  return (
    <GalleryItem>
      <Card id={name} isFlat>
        <Grid md={6}>
          <GridItem>
            <img className="Guitar-Image" src={url} alt="Guitar Image" />
          </GridItem>
          <GridItem>
            <CardTitle>{name}</CardTitle>
            <CardBody>
              Price: {price} <br />
              Description: {description}
            </CardBody>
            <CardFooter>
              <Button variant="secondary" onClick={openFormModal}>
                Edit
              </Button>
            </CardFooter>
          </GridItem>
        </Grid>
      </Card>

      {isFormModalOpen && (
        <Modal
          variant={ModalVariant.small}
          title="Edit Guitar"
          description="Change the fields you wish to change and then click 'Update'"
          isOpen={isFormModalOpen}
          onClose={cancelEditOfGuitar}
          actions={[
            <Button
              key="update"
              variant="primary"
              form="modal-with-form-form"
              onClick={updateGuitar}>
              Update
            </Button>,
            <Button key="cancel" variant="link" onClick={cancelEditOfGuitar}>
              Cancel
            </Button>
          ]}>
          <Form id="modal-with-form-form">
            <FormGroup label="Name" isRequired fieldId="modal-with-form-form-name">
              <TextInput
                isRequired
                type="string"
                id="modal-with-form-form-name"
                name="modal-with-form-form-name"
                value={nameValue}
                onChange={setNameValue}
              />
            </FormGroup>
            <FormGroup label="Url" isRequired fieldId="modal-with-form-form-url">
              <TextInput
                isRequired
                type="url"
                id="modal-with-form-form-url"
                name="modal-with-form-form-url"
                value={urlValue}
                onChange={setUrlValue}
              />
            </FormGroup>
            <FormGroup label="Price" isRequired fieldId="modal-with-form-form-price">
              <TextInput
                isRequired
                type="number"
                id="modal-with-form-form-price"
                name="modal-with-form-form-price"
                value={priceValue}
                onChange={setPriceValue}
              />
            </FormGroup>
            <FormGroup label="Description" isRequired fieldId="modal-with-form-form-description">
              <TextInput
                isRequired
                type="string"
                id="modal-with-form-form-description"
                name="modal-with-form-form-description"
                value={descriptionValue}
                onChange={setDescriptionValue}
              />
            </FormGroup>
          </Form>
        </Modal>
      )}
    </GalleryItem>
  );
};
GuitarInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  getGuitars: PropTypes.func.isRequired
};

export default GuitarInfo;
