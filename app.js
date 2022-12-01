require('dotenv').config();
const { readMail } = require('./readEmail');
const { processEmail } = require('./processEmail');

const bootstrap = async () => {
    console.log('Fetching the new mail', new Date().toString());
    const mail = await readMail();
    const { loja, address } = processEmail(mail)

};

bootstrap();
