import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//     addRequest,
//     addSuccess,
//     addError,
//     deleteRequest,
//     deleteSuccess,
//     deleteError,
//     fetchContactsRequest,
//     fetchContactsSuccess,
//     fetchContactsError,
    
// } from './phonebook-actions';

axios.defaults.baseURL = 'https://61abb3b6264ec200176d42f8.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
    'contact/fetchContacts',
    async () => {
        const { data } = await axios.get('/contacts');
        return data;
    }

);

export const addContact = createAsyncThunk('addContact', async ({ name, number }, { rejectWithValue }) => {
    const contact = {
        name,
        number,
        completed: false,
    };
            
    try {
        const { data } = await axios.post('/contacts', contact);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteContact = createAsyncThunk('deleteContact', async (contactId, { rejectWithValue }) => {
    try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;
    } catch (error) {
        return rejectWithValue(error);
    }
})

// export const deleteContact = contactId => dispatch => {
//     dispatch(deleteRequest());
//     axios
//         .delete(`/contacts/${contactId}`)
//         .then(() => dispatch(deleteSuccess(contactId)))
//         .catch(error => dispatch(deleteError(error)));

// };


// export const addContact = ({ name, number }) => dispatch => {
//     const contact = {
//         name,
//         number,
//         completed: false,
//     };

//     dispatch(addRequest());

//     axios
//         .post('/contacts', contact)
//         .then(({ data }) => dispatch(addSuccess(data)))
//         .catch(error => dispatch(addError(error)));
// };

// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest());

//     try {
//         const { data } = await axios.get('/contacts');
//         dispatch(fetchContactsSuccess(data));
//         console.log(data);
//     } catch (error) {
//        dispatch(fetchContactsError(error)) 
//     }

//     // axios
//     //     .get('/contacts')
//     //     .then(({data}) => dispatch(fetchContactsSuccess(data)))
//     //     .catch(error => dispatch(fetchContactsError(error)));       
// };



// export const deleteContact = contactId => dispatch => {
//     dispatch(deleteRequest());
//     axios
//         .delete(`/contacts/${contactId}`)
//         .then(() => dispatch(deleteSuccess(contactId)))
//         .catch(error => dispatch(deleteError(error)));

// };