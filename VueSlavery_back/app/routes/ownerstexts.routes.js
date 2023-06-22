module.exports = app => {
    const ownerstexts = require('../controllers/ownerstexts.controller.js');
    let router = require('express').Router();

    // Get all references to owners in sources
    router.get('/', ownerstexts.findAll)
    // Get all reference for owner by ID
    router.get('/:id', ownerstexts.findOneByOwner)

    app.use('/api/ownerstexts', router)
}
