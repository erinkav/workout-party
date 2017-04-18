var Nightmare = require('nightmare'); 
var user = require('./user-info'); 
var nightmare = Nightmare({show: true}); 

nightmare.goto('https://classpass.com/login')
         .type('#email_field', user.email)
         .type('#password_field', user.password)
         .click('button[type="submit"]')
         .evaluate(function() {
            return document.querySelector('.hero__title')
         })
         .end()
         .then(function(data) {
            console.log(data)
         })
         .catch(function(err) {
           return console.error(err)
         })
