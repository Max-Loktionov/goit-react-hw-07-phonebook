import ContactItem from '../ContactItem';

const ContactsList = ({ data }) => {
  return (
    <ul>
      {data.map(contact => {
        return (
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
          ></ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactsList;