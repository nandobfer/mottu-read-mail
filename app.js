require('dotenv').config();
const { readMail } = require('./readEmail');

const bootstrap = async () => {
    console.log('Fetching the new mail', new Date().toString());
    await readMail();
};

bootstrap();
