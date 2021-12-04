import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

export const fetchContactsRequest = createAction('contact/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contact/fetchContactsSuccess');
export const fetchContactsError = createAction('contact/fetchContactsError');

export const addRequest = createAction('contact/addRequest');
export const addSuccess = createAction('contact/addSuccess');
export const addError = createAction('contact/addError');

export const deleteRequest = createAction('contact/deleteRequest');
export const deleteSuccess = createAction('contact/deleteSuccess');
export const deleteError = createAction('contact/deleteError');


// export const deleteContact = createAction('contact/Delete');
export const changeFilter = createAction('contact/cgangeFilter');

// const addContact = ({name, number}) => ({
//     type: types.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     }
// });

// const deleteContact = (contactId) => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// const changeFilter = (value) => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });

// export default { addContact, deleteContact, changeFilter };