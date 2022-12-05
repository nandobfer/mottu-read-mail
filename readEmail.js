const imaps = require('imap-simple');
const { convert } = require('html-to-text');
const { READ_MAIL_CONFIG } = require('./config');

const readMail = async () => {
    const mail = {subject: null, body: null}
  try {
      const connection = await imaps.connect(READ_MAIL_CONFIG);
      console.log('CONNECTION SUCCESSFUL', new Date().toString());
      const box = await connection.openBox('INBOX');
      const searchCriteria = ['UNSEEN'];
      const fetchOptions = {
          bodies: ['HEADER', 'TEXT'],
          markSeen: true,
        };

    const results = await connection.search(searchCriteria, fetchOptions);

    if (!results[0]) return false
        
    results.forEach((res) => {
      const text = res.parts.filter((part) => {
        return part.which === 'TEXT';
      });
      const subject = res.parts.filter((part) => {
        return part.which === 'HEADER';
      })[0].body.subject[0];
      let emailHTML = text[0].body;
      let emailText = convert(emailHTML);

      mail.subject = subject
      mail.body = emailText
    });
    
    connection.end();
    return mail

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  readMail,
};
