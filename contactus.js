const path = require('path');
const fs = require('fs');
const express = require('express');
const root = require('../helpers/path');
const router = express.Router();

const productsControllers = require('../controllers/product'); 

router.get('/contactus', productsControllers.getContactus);

router.post('/contactus', productsControllers.postContactus);

router.post("/contactus", (req,res) => {
    console.log(req.body.name)
    console.log(req.body.email)
    fs.writeFile("username.txt",`${req.body.name}: ${req.body.email}`, {flag: 'a'}, (err) =>
      err ? console.log(err) : res.redirect("/add-product")
    )
  });
module.exports = router;
