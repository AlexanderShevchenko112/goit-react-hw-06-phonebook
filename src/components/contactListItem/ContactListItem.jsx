import css from 'components/contactListItem/ContactListItem.module.css';
import PropTypes from 'prop-types';
const ContactListItem = ({ contact, onDeleteContact }) => (
  <li className={css.listItem}>
    {contact.name} : {contact.number}
    <button
      className={css.deleteBtn}
      type="button"
      onClick={() => onDeleteContact(contact.id)}
    >
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
