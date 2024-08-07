// app/assets/api.js
import axios from 'axios';

export const api = async (data_obj) => {
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

