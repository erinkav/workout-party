var Nightmare = require('nightmare'); 
var nightmare = Nightmare({show: true}); 
var cheerio = require('cheerio');
var studio = "Barry's Bootcamp - SoMa"
nightmare.goto('https://classpass.com/classes')
         .wait('.filter__section')
         .wait('.filter__header__arrow')
         .click('.filter__section:nth-child(5) .filter__header__arrow')
         .wait('.ng-empty')
         .type('.ng-empty', "Barry's Bootcamp")
         .wait(`.filter__option--~ .filter__option+ .filter__option a[text="${studio}"]`)
         .click(`.filter__option--~ .filter__option+ .filter__option a[text="${studio}"]`)
         // .click('.filter__select')
         // .click('.filter__section :nth-child(2) > a')
         // .wait('.filter__search > input[type="text"]')
         // .type('.filter__search > input[type="text"]')
         .evaluate(function() {
           return document.body.innerHTML
         })
         .end()
         .then(function(body) {
            var $ = cheerio.load(body); 
          // console.log(body)
         })
         .catch(function(err) {
          console.log(err)
         })
