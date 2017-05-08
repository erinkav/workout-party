const nightmare = require('nightmare')( {show: true} );

let login = (user) => {
  return nightmare.goto('https://classpass.com/login')
    .type('#email_field', user.email)
    .type('#password_field', user.password)
    .click('button[type="submit"]')
}

module.exports = login;
