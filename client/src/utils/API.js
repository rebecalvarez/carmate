import axios from 'axios';

const BASEURL = 'https://api.carmd.com/v3.0/fields?';
const AUTH_KEY = `Basic ${process.env.REACT_APP_CARMD_AUTH_KEY}`;
const PARTNER_TOKEN = process.env.REACT_APP_CARMD_PARTNER_TOKEN;

// export default {
//   // gets books from google books api
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY + PARTNER_TOKEN);
//   },

export default {
  //get available fields
  getAvailableFields: function(vin, mileage) {
    return axios.get('api/service/availableFields');
  },

  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get('/api/books/' + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete('/api/books/' + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post('/api/books', bookData);
  // },
};
