exports.getContactus = (req, res, next) => {
    res.sendFile(path.join(root, 'views', 'contact.html'));
};

exports.postContactus = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
};
