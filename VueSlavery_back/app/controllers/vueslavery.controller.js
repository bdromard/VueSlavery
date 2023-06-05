const db = require('../models');
const VueSlavery = db.vueSlavery;
const Op = db.Sequelize.Op;

// Create and save a new slave.
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

const slave = {
    name: req.body.name,
    owner: req.body.owner,
    gender: req.body.gender,
    profession: req.body.profession,
    owner_id: req.body.owner_id,
    archive_id: req.body.archive_id
}

VueSlavery.create(slave)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the slave's data."
        });
    });
};

// Retrieve all slaves from the database.
exports.findAll = (req, res) => {

};

// Find a single slave with an ID.
exports.findOne = (req, res) => {

};

// Update a slave's data by the ID in the request.
exports.update = (req, res) => {

};
