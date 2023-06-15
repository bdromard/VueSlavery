const { db } = await require('../models/index.js');
console.log(db)
const Slaves = db.slaves;
const Op = db.Sequelize.Op;

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
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the slave's data."
        });
    });
};

// Retrieve all slaves from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? {name: {[Op.like]: `%${name}`}} : null;

    Slaves.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving all slaves' data."
            });
        });
};

// Find a single slave with an ID.
exports.findOne = (req, res) => {
    const id = req.params.id;

    Slaves.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find slave's data with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving slave's data with id=${id}`
            });
        });
};

// Update a slave's data by the ID in the request.
exports.update = (req, res) => {
    const id = req.params.id;

    Slaves.update(req.body, {
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
            res.status(500).send({
                message: `Error updating slave's data with id=${id}`
            })
        })
};
