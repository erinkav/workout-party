var Nightmare = require('nightmare'); 
var nightmare = Nightmare({show: true}); 

nightmare.goto('https://classpass.com/classes')
         .wait('.filter__section')
         // .click('.filter__select ')
         // .click('.filter__section :nth-child(2) > a')
         // .wait('.filter__search > input[type="text"]')
         // .type('.filter__search > input[type="text"]')
         .evaluate(function() {
           return document.querySelectorAll('.filter__section')
         })
         .end()
         .then(function(data) {
          console.log(data)
         })
         .catch(function(err) {
          console.log(err)
         })
