import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalVariant, Form, FormGroup, TextInput } from '@patternfly/react-core';
import GuitarGallery from './GuitarGallery';
import { GUITARS_URL } from './constants.js';

const MyGuitarStore = () => {
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

  // Create Form:

  const initialFormValues = {
    name: '',
    url: '',
    price: '',
    description: ''
  };

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openFormModal = () => {
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };

  // Form Attributes useStates():
  const [nameValue, setNameValue] = useState(initialFormValues['name']);
  const [urlValue, setUrlValue] = useState(initialFormValues['url']);
  const [priceValue, setPriceValue] = useState(initialFormValues['price']);
  const [descriptionValue, setDescriptionValue] = useState(initialFormValues['description']);

  const emptyFormValues = () => {
    setNameValue(initialFormValues['name']);
    setUrlValue(initialFormValues['url']);
    setPriceValue(initialFormValues['price']);
    setDescriptionValue(initialFormValues['description']);
  };

  const cancelCreationOfGuitar = () => {
    closeFormModal();
    emptyFormValues();
  };

  const createGuitar = async () => {
    closeFormModal();

    try {
      await axios.post(GUITARS_URL, {
        name: nameValue,
        url: urlValue,
        price: priceValue,
        description: descriptionValue
      });
      getGuitars();
    } catch (error) {
      console.log('Server have encountered an error:');
      console.log(error);
    } finally {
      emptyFormValues();
    }
  };

  return (
    <>
      <GuitarGallery guitars={guitars} getGuitars={getGuitars} />
      <br />
      <Button variant="primary" onClick={openFormModal}>
        Create a New Guitar
      </Button>

      <Modal
        variant={ModalVariant.small}
        title="Create a new Guitar"
        description="Add the fields you wish to add, then click 'Create Guitar'"
        isOpen={isFormModalOpen}
        onClose={cancelCreationOfGuitar}
        actions={[
          <Button key="create" variant="primary" form="modal-with-form-form" onClick={createGuitar}>
            Create Guitar
          </Button>,
          <Button key="cancel" variant="link" onClick={cancelCreationOfGuitar}>
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
    </>
  );
};

export default MyGuitarStore;
