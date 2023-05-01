import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';
import ContactListItem from 'components/contactListItem/ContactListItem';
import css from 'components/contactList/ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    const filter = state.filter.trim().toLowerCase();
    return state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  });

  const handleDelete = id => {
    dispatch(remove(id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
