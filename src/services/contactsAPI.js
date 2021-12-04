import axios from 'axios';

axios.defaults.baseURL = 'https://61abb3b6264ec200176d42f8.mockapi.io/api/v1/';

const fetchContacts = () => {
    return axios.get('/contsct').then(response => response.data);
};

const addContact = contact => {
    return axios.post('/contsct', contact).then(({data}) => data);
};

const deleteContact = contactId => {
    return axios.delete(`/contsct${contactId}`);
};

const updataContact = (contactId, updata) => {
    return axios.patch(`/contsct${contactId}`, updata ).then(({data}) => data);
};

export default { fetchContacts, addContact, deleteContact, updataContact };

