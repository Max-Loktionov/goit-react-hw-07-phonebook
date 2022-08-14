import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Delete, Item } from '../ContactsList/Contacts.styled';

function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item>
      {name}: {number}
      <Delete
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? (
          <Oval
            ariaLabel="loading-indicator"
            height={10}
            width={16}
            strokeWidth={10}
            strokeWidthSecondary={10}
            color="orange"
            secondaryColor="yellow"
          />
        ) : (
          'Delete'
        )}
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
