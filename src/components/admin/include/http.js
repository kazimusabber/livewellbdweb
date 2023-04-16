

import axios from 'axios';
const http = axios.create({
      baseURL: 'https://server.livewellbd.com/api/v1.0',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem('token'),
      },
  }); 


export default http;