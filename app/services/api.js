// app/assets/api.js
const axios = require('axios');

const api = async (data_obj) => {
  const { url, method, headers, params, data } = data_obj;

  try {
    const response = await axios({
      url,
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      params: params || {},
      data: data || {},
    });

    return response.data;
  } catch (error) {
    console.error(`Error ${url}:`, error.message);
    throw error;
  }
};

module.exports = api;

// api({
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   method: 'GET'
// }).then(response => {
//   console.log('GET response:', response);
// }).catch(error => {
//   console.error('GET error:', error);
// });
