import React, { useReducer, useState } from 'react';
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
import { guitarUrl } from './constants.js';

const GuitarInfo = ({ id, name, url, price, description }) => {
  const [isFormModalOpen, toggleFormModal] = useReducer(
    (isFormModalOpen) => !isFormModalOpen,
    false
  );

  const initialFormValues = {
    name: '',
    url: '',
    price: null,
    description: ''
  };

  // initialFormValues according to the button pressed!! have 1 for create and 1 for edit

  // Form Attributes useStates():             Initial Values
  const [nameValue, setNameValue] = useState(initialFormValues['name']);
  const [ulrValue, setUrlValue] = useState(initialFormValues['url']);
  const [priceValue, setPriceValue] = useState(initialFormValues['price']);
  const [descriptionValue, setDescriptionValue] = useState(initialFormValues['description']);

  const editGuitar = () => {
    // Q: Do I need to axios.get(id) the edited guitar from the DB? I think so, because the form values are empty !

    // Populate fields of form with the edited guitar's attributes:
    setNameValue(name);
    setUrlValue(url);
    setPriceValue(price);
    setDescriptionValue(description);

    toggleFormModal();
  };

  const updateGuitar = async (id) => {
    // Close FormModal:
    toggleFormModal();

    const updatedGuitarUrl = guitarUrl.replace(':id', id);

    try {
      await axios.put(updatedGuitarUrl, {
        name: nameValue,
        url: ulrValue,
        price: priceValue,
        description: descriptionValue
      });
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
              <Button variant="secondary" onClick={() => editGuitar()}>
                Edit
              </Button>
            </CardFooter>
          </GridItem>
        </Grid>
      </Card>

      <Modal
        variant={ModalVariant.small}
        title="Edit Guitar"
        description="Change the fields you wish to change and then click 'Update'"
        isOpen={isFormModalOpen}
        onClose={toggleFormModal}
        actions={[
          <Button
            key="update"
            variant="primary"
            form="modal-with-form-form"
            onClick={() => updateGuitar(id)}>
            Update
          </Button>,
          <Button key="cancel" variant="link" onClick={toggleFormModal}>
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
              onChange={(value) => setNameValue(value)}
            />
          </FormGroup>
          <FormGroup label="Url" isRequired fieldId="modal-with-form-form-url">
            <TextInput
              isRequired
              type="url"
              id="modal-with-form-form-url"
              name="modal-with-form-form-url"
              value={ulrValue}
              onChange={(value) => setUrlValue(value)}
            />
          </FormGroup>
          <FormGroup label="Price" isRequired fieldId="modal-with-form-form-price">
            <TextInput
              isRequired
              type="number"
              id="modal-with-form-form-price"
              name="modal-with-form-form-price"
              value={priceValue}
              onChange={(value) => setPriceValue(value)}
            />
          </FormGroup>
          <FormGroup label="Description" isRequired fieldId="modal-with-form-form-description">
            <TextInput
              isRequired
              type="string"
              id="modal-with-form-form-description"
              name="modal-with-form-form-description"
              value={descriptionValue}
              onChange={(value) => setDescriptionValue(value)}
            />
          </FormGroup>
        </Form>
      </Modal>
    </GalleryItem>
  );
};
GuitarInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default GuitarInfo;
