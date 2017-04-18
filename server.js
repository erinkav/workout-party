var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();




//All the web scraping magic will happen here
var url = 'https://classpass.com/studios';

request(url, function(err, res, html) {
  if (err) {
    console.log('Error: ', err); 
  } else {
    console.log(res.body)
    var $ = cheerio.load(html); 
    $('.email-field').filter(function() {
      var data = $(this); 
      console.log(data)

    })
  }
});



exports = module.exports = app;
