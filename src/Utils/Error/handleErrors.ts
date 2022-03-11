import { ErrResponseModalAPI } from '@Models/Global.types';

export const checkError = <T>(error: ErrResponseModalAPI<T>) => {
  // The request was made and the server responded with a status code
  if (error.response) {
    console.log(error.response);
    console.log(error.response.data);
    console.log(error.response.headers);
    return;
  }
  // The request was made but no response was received
  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  // http.ClientRequest in node.js
  if (error.request) {
    console.log(error.request);
    return;
  }
  // // Something happened in setting up the request that triggered an Error
  if (error.message) {
    console.log('Error', error.message);
    return;
  }
};
