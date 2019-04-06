import axios from 'axios';

// export default {
//   // gets books from google books api
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY + PARTNER_TOKEN);
//   },

export default {
  //get available fields
  getAvailableFields: function(year, make, model, mileage, vin) {
    // console.log(year, make, model, mileage, vin);
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
  getMaintenance: function(year, make, model, mileage, vin, userEmail) {
    // console.log(year, make, model, mileage, vin, userEmail);
    return axios.get('api/service/getMaintenance', {
      params: {
        year: year,
        make: make,
        model: model,
        mileage: mileage,
        vin: vin,
        userEmail: userEmail
      },
    });
  },

  getUpcoming: function(year, make, model, mileage, vin, userEmail) {
    // console.log(year, make, model, mileage, vin, userEmail);
    return axios.get('api/service/getUpcoming', {
      params: {
        year: year,
        make: make,
        model: model,
        mileage: mileage,
        vin: vin,
        userEmail: userEmail
      },
    });
  },

  getRecalls: function (year, make, model, vin, userEmail) {
    // console.log(year, make, model, vin, userEmail);
    return axios.get('api/service/getRecalls', {
      params: {
        year: year,
        make: make,
        model: model,
        vin: vin,
        userEmail: userEmail
      },
    });
  },

  getWarranty: function (year, make, model, vin, userEmail) {
    // console.log(year, make, model, vin, userEmail);
    return axios.get('api/service/getWarranty', {
      params: {
        year: year,
        make: make,
        model: model,
        vin: vin,
        userEmail: userEmail
      },
    });
  },

  saveUser: (userData) => {
    return axios.post('api/user', userData);
  },

  getUserServices: (userEmail) => {
    return axios.get('api/userservices', userEmail);
  }
};
