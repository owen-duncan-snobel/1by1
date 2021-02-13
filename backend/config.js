// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
	bearer: process.env.BEARER,
	port: process.env.PORT,
};
