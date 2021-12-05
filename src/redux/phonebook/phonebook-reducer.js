import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    addRequest,
    addSuccess,
    addError,
    deleteRequest,
    deleteSuccess,
    deleteError,
    changeFilter,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from './phonebook-actions';
import { fetchContacts, addContact, deleteContact } from './phonebook-operations';


const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContact.fulfilled]: (state, { payload }) => state.filter(({id}) => id !== payload),    
});

const loading = createReducer(false, {
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: ()=> false,
});

const filter = createReducer('', {
     [changeFilter]: (_, { payload }) => payload,
});



export default combineReducers({
    items,
    filter,
    loading,
});

// const items = createReducer([], {
//     [fetchContactsSuccess]: (state, { payload }) => payload,
//     [addSuccess]: (state, { payload }) => [payload, ...state],
//     [deleteSuccess]: (state, { payload }) => state.filter(({id}) => id !== payload),    
// });

// const items = (state = initilItems, {type, payload}) => {
//     switch (type) {
//         case types.ADD:
//             return [payload, ...state];
        
//         case types.DELETE:
//             return state.filter(({id}) => id !== payload);
  
//         default:    
//             return state;
//     };   
// };

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload
               
//         default:
//             return state;
//     };   
// };



