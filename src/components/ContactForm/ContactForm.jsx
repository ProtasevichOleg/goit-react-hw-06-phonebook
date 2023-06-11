// ContactForm.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Span, SubmitButton } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (onSubmit(name, number)) {
      resetState();
    }
  };

  const validation = {
    nameValidationMessage:
      'Name may contain only letters, apostrophe, dash and spaces.' +
      "For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    numberValidationMessage:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title={validation.nameValidationMessage}
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title={validation.numberValidationMessage}
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
