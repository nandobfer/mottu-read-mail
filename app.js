require('dotenv').config();
const { readMail } = require('./readEmail');
const { processEmail } = require('./processEmail');
const { api } = require('./api');

const bootstrap = async () => {
    console.log('Fetching the new mail', new Date().toString());
    const mail = await readMail();
    if (!mail) {
        console.log('There is no unseen e-mail')
        process.exit()
    }

    const { loja, address } = processEmail(mail)
    console.log(address)

    api.post('/pedido', { loja, address })
        .then((response) => {
            if (response.data.error) console.error(response.data.error)
            console.log(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
};

bootstrap();
