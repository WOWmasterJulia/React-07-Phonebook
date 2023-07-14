import axios from 'axios';

axios.defaults.baseURL = 'https://64b046bec60b8f941af58129.mockapi.io';

export async function fetchAllContacts() {
  const result = await axios(`/contacts`);

  return result.data;
}

export async function addNewContacts(newContact) {
  const result = await axios.post(`/contacts`, newContact);

  return result.data;
}

export async function deleteContacts(id) {
  const result = await axios.delete(`/contacts/${id}`);

  return result.data;
}