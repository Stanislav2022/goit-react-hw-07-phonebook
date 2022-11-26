import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63817c5c9842ca8d3c940bef.mockapi.io/contacts',
  params: {
    _limit: 10,
  },
});

export const getContact = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
