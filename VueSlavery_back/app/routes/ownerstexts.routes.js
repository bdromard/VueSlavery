module.exports = app => {
    const ownerstexts = require('../controllers/ownerstexts.controller.js');
    let router = require('express').Router();

    // Get all references to owners in sources
    router.get('/', ownerstexts.findAll)

    app.use('/api/ownerstexts', router)
}
