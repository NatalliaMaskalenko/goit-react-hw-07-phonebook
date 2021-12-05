import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {deleteContact, fetchContacts} from '../../redux/phonebook/phonebook-operations';
import s from './ContactsList.module.css'
import ContactsItem from '../ContactsItem';


export default function ContactsList () {
    const contacts = useSelector((state) => {
        const { filter, items } = state.contacts;
        const normalizedFilter = filter.toLowerCase();
        const visibleContacts = items.filter(item =>
            item.name.toLowerCase().includes(normalizedFilter)
        );       
        return visibleContacts;
    });
    
    const dispatch = useDispatch();
    const onDeleteContact = id => dispatch(deleteContact(id));
    
    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
    <ul className={s.contacts__list}>
            {contacts.map(({ id, name, number }) => (
                <ContactsItem
                    key={id}
                    name={name}
                    number={number}
                    onDeleteContact={() => onDeleteContact(id)}
            />
        ))}
    </ul>
    )
};

ContactsList.propTypes = {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func,
};

// const mapStateToProps = (state) => {
//     const { filter, items } = state.contacts;
//     const normalizedFilter = filter.toLowerCase();
//     const visibleContacts = items.filter(item =>
//         item.name.toLowerCase().includes(normalizedFilter)
//     );
    
//     return {
//     contacts: visibleContacts,
//     }
// };

// const mapDispatchToProps = dispatch => ({
//     onDeleteContact: (id) => dispatch(phonebookActions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

