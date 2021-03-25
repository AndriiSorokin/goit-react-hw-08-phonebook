import { createSelector } from '@reduxjs/toolkit';

const getAllContact = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleUser = createSelector([getAllContact, getFilter], (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
});

export default {
  getFilter,
  getVisibleUser,
};
