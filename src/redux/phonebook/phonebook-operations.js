import axios from 'axios';
import {
    addRequest,
    addSuccess,
    addError,
    deleteRequest,
    deleteSuccess,
    deleteError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    
} from './phonebook-actions';

axios.defaults.baseURL = 'https://61abb3b6264ec200176d42f8.mockapi.io/api/v1/';

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactsSuccess(data))
    } catch (error) {
       dispatch(fetchContactsError(error)) 
    }

    // axios
    //     .get('/contacts')
    //     .then(({data}) => dispatch(fetchContactsSuccess(data)))
    //     .catch(error => dispatch(fetchContactsError(error)));       
};

export const addContact = ({ name, number }) => dispatch => {
    const contact = {
        name,
        number,
        completed: false,
    };

    dispatch(addRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addSuccess(data)))
        .catch(error => dispatch(addError(error)));
};

export const deleteContact = contactId => dispatch => {
    dispatch(deleteRequest());
    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteSuccess(contactId)))
        .catch(error => dispatch(deleteError(error)));

};