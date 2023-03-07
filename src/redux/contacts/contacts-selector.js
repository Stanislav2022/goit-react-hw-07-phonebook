export const getContacts = state => state.contacts.items;
// export const getState = ({ contacts }) => ({
//   loading: contacts.loading,
//   error: contacts.error,
// });
export const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;
