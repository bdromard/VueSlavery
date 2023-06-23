module.exports = app => {
    const slavestexts = require('../controllers/slavestexts.controller.js');
    let router = require('express').Router();

    // Get all references to owners in sources
    router.get('/', slavestexts.findAll)
    // Get all reference for owner by ID
    router.get('/:id', slavestexts.findOneBySlave)

    app.use('/api/slavestexts', router)
}
