const db = require('../models');
const Owners = db.owners;
const Op = db.Sequelize.Op;

// Owners
// Create and save a new owner
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    const owner = {
        id: req.body.id,
        name: req.body.name,
        gender: req.body.gender,
        archiveId: req.body.archive_id
    }

Owners.create(owner)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the owner's data."
        });
    });
};

    // Retrieve all owners from the database.
    exports.findAll = (req, res) => {
    
        Owners.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occured while retrieving all owners' data."
                });
            });
    };

    // Find a single owner with an ID.
    exports.findOne = (req, res) => {
        const id = req.params.id;
    
        Owners.findByPk(id)
            .then(data => {
                if (data) {
                    res.send(data);
                } else {
                    res.status(404).send({
                        message: `Cannot find owner's data with id=${id}`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: `Error retrieving owner's data with id=${id}`
                });
            });
    };
    
    // Update a owner's data by the ID in the request.
    exports.update = (req, res) => {
        const id = req.params.id;
    
        Owners.update(req.body, {
            where: { id: id}
        })
            .then(num => {
                if (num == 1){
                    res.send({
                        message: "Owner's data was updated successfully."
                    })
                } else {
                    res.send({
                        message: `Cannot update owner's data with id=${id}. It was either not found or req.body is empty.`
                    })
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: `Error updating owner's data with id=${id}`
                })
            })
    };
