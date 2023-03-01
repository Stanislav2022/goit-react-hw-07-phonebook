import * as api from '../../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const isDuplicate = ({ name }, contacts) => {
  const NormalizedName = name.toLowerCase();
  const result = contacts.items.find(item => {
    return NormalizedName === item.name.toLowerCase();
  });

  return result;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await api.getContact();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDuplicate(data, contacts)) {
        return alert(`${data.name} - is already in contacts`);
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(id);
    }
  }
);
