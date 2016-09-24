//export const API_URL = 'http://localhost:3000';
//export const API_URL = 'http://photopay-api.herokuapp.com';
//export const API_URL = process.env.API_URL || 'http://localhost:3000';
export const API_URL = process.env.NODE_ENV === "production" ? 'http://photopay-api.herokuapp.com' : 'http://localhost:3000';