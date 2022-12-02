module.exports.READ_MAIL_CONFIG = {
  imap: {
    user: "sistema@bapkasorvetes.com.br",
    password: "SistemaBapka2023!",
    host: 'mail.bapkasorvetes.com.br',
    port: 993,
    authTimeout: 10000,
    tls: true,
    tlsOptions: { rejectUnauthorized: false,},
  },
};

module.exports.SEND_MAIL_CONFIG = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};
