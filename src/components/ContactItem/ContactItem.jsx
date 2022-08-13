import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Delete, Item } from '../ContactsList/Contacts.styled';

function ContactItem({ name, number, id }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Item>
      {name}: {number}
      <Delete type="button" onClick={() => deleteContact(id)}>
        Delete
      </Delete>
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
