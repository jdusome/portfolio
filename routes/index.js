/*
Name: Joshua Dusome
Date: October 13, 2016
File Name: index.js
Website: https://jdusome-portfolio.herokuapp.com
Purpose: Controller used to route the different views on the website, also passes variables.
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home'
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'
  });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me'
  });
});

module.exports = router;
