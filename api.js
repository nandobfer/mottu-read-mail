const axios = require('axios');

const api = axios.create({
    baseURL: "https://localhost:4000/api/v1/bapka/mottu",
    timeout: 1000 * 10,
})

module.exports = {
    api,
  };