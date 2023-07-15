import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectValueFilter = state => state.filters;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);





// export const getContacts = state => state.contacts;
// export const getFilter = state => state.filter;

// import { createSelector } from '@reduxjs/toolkit';

// export const getContacts = state => {
//   return state.contacts;
// };

// export const getValueFilter = state => state.filter;
// export const getFilteredContacts = createSelector(
//   [getContacts, getValueFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );