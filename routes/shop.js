
const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  const products = adminData.products;
  res.render('shop', {
    pageTitle: "Shop",
    prods: products,
    path: '/'
  });
});

module.exports = router;