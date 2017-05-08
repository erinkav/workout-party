// import nightmare and set up custom configurations
const Nightmare = require('nightmare');
Nightmare.action('findStudioFilter', function(done) {
  this.evaluate_now( function() {
    return _.filter(document.querySelectorAll('.filter__header'), (studioFilter) => {
      return studioFilter.innerText === 'STUDIOS';
    })[0];
  }, done);
});
const nightmare = Nightmare({
  openDevTools: true,
  show: true
});

const _ = require('lodash');

const user = require('./user-info');
const utils = require('./utils');
let login = require('./login');


let getClasses = user => {
  return login(user)
  .wait('.browse-studios')
  .click('.browse-studios')
  .wait(5000)
  .findStudioFilter()
  .end()
  .then( studioSelector => {
    // TODO: how to click this??? just ending for now
    console.log('Studio filter is ', studioSelector);
    return studioSelector;
  })
  .catch( err => utils.handleError(err) )
};

// run nightmare
getClasses(user);
