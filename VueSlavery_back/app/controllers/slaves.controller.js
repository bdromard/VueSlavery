const db = require('../models/index.js');
const Slaves = db.slaves;
const Op = db.Sequelize.Op

// Slaves
// Create and save a new slave.
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

const slave = {
    id: req.body.id,
    name: req.body.name,
    owner: req.body.owner,
    gender: req.body.gender,
    profession: req.body.profession,
    archiveId: req.body.archiveId
    }

Slaves.create(slave)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).json(err)        
    });
};

// Retrieve all slaves from the database.
exports.findAll = (req, res) => {

    Slaves.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

// Find a single slave with an ID.
exports.findOne = (req, res) => {
    const id = req.params.id;

    Slaves.findByPk(id)
        .then(data => {
                res.send(data);
             }
        )
        .catch(err => {
            res.status(404).json(err);
});
}
// Update a slave's data by the ID in the request.
exports.update = (req, res) => {
    const id = req.params.id;

    Slaves.update(req.params, {
        where: { id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Slave's data was updated successfully."
                })
            } else {
                res.send({
                    message: `Cannot update slave's data with id=${id}. It was either not found or req.body is empty.`
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
    })
}
