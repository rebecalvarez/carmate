import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = `&key=${process.env.REACT_APP_CARMD_AUTH_KEY}`;
const PARTNER_TOKEN = process.env.REACT_APP_CARMD_PARTNER_TOKEN; 

// export default {
//   // gets books from google books api
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY + PARTNER_TOKEN);
//   },

export default {
  // Gets all books
  getAvailableFields: function(query)
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
