const axios = require('axios');

const api = axios.create({
    baseURL: "http://app.agenciaboz.com.br:4000/api/v1/bapka/mottu",
    timeout: 1000 * 10,
})

module.exports = {
    api,
  };