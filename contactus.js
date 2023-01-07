const path = require('path');
const fs = require('fs');
const express = require('express');
const root = require('../helpers/path');
const router = express.Router();

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(root, 'views', 'contact.html'));
});
router.post('/contactus', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
});
router.post("/contactus", (req,res) => {
    console.log(req.body.name)
    console.log(req.body.email)
    fs.writeFile("username.txt",`${req.body.name}: ${req.body.email}`, {flag: 'a'}, (err) =>
      err ? console.log(err) : res.redirect("/add-product")
    )
  });
module.exports = router;