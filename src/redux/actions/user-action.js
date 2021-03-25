import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contact/fetchContact/Request');
export const fetchContactSuccess = createAction('contact/fetchContactSuccess');
export const fetchContactError = createAction('contact/fetchContactError');

export const addContactRequest = createAction('contact/addContact/Request');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactRequest = createAction('contact/deleteContactRequest');
export const deleteContactSuccess = createAction('contact/deleteContactSuccess');
export const deleteContactError = createAction('contact/deleteContactError');

export const changeFilter = createAction('contact/filter');
