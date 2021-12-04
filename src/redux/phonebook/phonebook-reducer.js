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
// import types from "./phonebook-types";

// const initilItems = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const items = createReducer([], {
    [fetchContactsSuccess]: (state, { payload }) => payload,
    [addSuccess]: (state, { payload }) => [payload, ...state],
    [deleteSuccess]: (state, { payload }) => state.filter(({id}) => id !== payload),    
});

const loading = createReducer(false, {
    [addRequest]: () => true,
    [addSuccess]: () => false,
    [addError]: () => false,
    [deleteRequest]: () => true,
    [deleteSuccess]: () => false,
    [deleteError]: () => false,
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: ()=> false,
});

const filter = createReducer('', {
     [changeFilter]: (_, { payload }) => payload,
});



export default combineReducers({
    items,
    filter,
    loading,
});


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



