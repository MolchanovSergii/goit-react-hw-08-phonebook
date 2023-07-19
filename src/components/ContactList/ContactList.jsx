import { useDispatch, useSelector } from 'react-redux';
import contactsSelector from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';

import Loader from 'components/Loader/Loader';
import { StyledButton } from '../ContactForm/ContactFormStyled';
import { StyledContactList, StyledContactItem } from './ContactListStyled';

const ContactList = () => {
  const contactsList = useSelector(contactsSelector.selectContactsState);

  const { isLoading, error, items } = contactsList;

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <StyledContactList>
        {visibleContacts.map(({ id, name, number }) => (
          <StyledContactItem key={id}>
            {name} : {number}
            <StyledButton onClick={() => dispatch(deleteContact(id))}>
              Delete
            </StyledButton>
          </StyledContactItem>
        ))}
      </StyledContactList>
    </>
  );
};

export default ContactList;
