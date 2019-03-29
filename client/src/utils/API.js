import axios from 'axios';

// export default {
//   // gets books from google books api
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY + PARTNER_TOKEN);
//   },

export default {
  //get available fields
  getAvailableFields: function(year, make, model, mileage, vin) {
    console.log(year, make, model, mileage, vin);
    return axios.get('api/service/availableFields', {
      params: {
        year: year,
        make: make,
        model: model,
        mileage: mileage,
        vin: vin,
      },
    });
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
