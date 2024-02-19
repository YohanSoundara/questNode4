require('dotenv').config();

const { MY_NAME, MY_CITY, MY_LANGUAGE } = process.env;

const message = `I am ${MY_NAME}, wilder in ${MY_CITY}, and I love ${MY_LANGUAGE}.`;

console.log(message);