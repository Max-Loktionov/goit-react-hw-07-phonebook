import { useSelector } from 'react-redux';
import Section from '../Section';
import { useGetContactsQuery } from 'redux/contactsSlice';
import Phonebook from '../Phonebook';
import ContactsList from 'components/ContactsList';
import Filter from '../Filter';
import { getFiltred } from 'redux/filterSlice';

const ContactsPage = () => {
  const { data } = useGetContactsQuery();

  const value = useSelector(getFiltred);

  const getFiltredContacts = () => {
    if (value === '') {
      return data;
    } else {
      const normalizedFilter = value.toLowerCase().trim();
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  return (
    <div>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      {data && (
        <Section title="Contacts">
          <Filter />
          {data && <ContactsList data={getFiltredContacts()} />}
        </Section>
      )}
    </div>
  );
};

export default ContactsPage;
