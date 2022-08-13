import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Label, Input, Submit } from './Phonebook.styled';

export default function Phonebook() {
  const { data } = useGetContactsQuery();
  const [createContact] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      Notify.failure(`${name} is already in contacts`);
      return;
    } else if (data.find(contact => contact.number === number)) {
      Notify.failure(
        `this number: ${number} is in, you dont want to add one more time.`
      );
      return;
    } else {
      const contact = {
        name: name,
        number: number,
      };
      createContact(contact);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="nameInputId">
        Name
        <Input
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="nameInputId"
        />
      </Label>
      <Label htmlFor="numberInputId">
        Number
        <Input
          value={number}
          onChange={handleInputChange}
          id="numberInputId"
          placeholder="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Submit type="submit"> Add contact </Submit>
    </form>
  );
}
