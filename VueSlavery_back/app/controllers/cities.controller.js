const db = require('../models');
const Cities = db.cities;
const Op = db.Sequelize.Op;

// Cities
// Create and save a new city.
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

const city = {
    id: req.body.id,
    name: req.body.name,
    }

Cities.create(city)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the city's data."
        });
    });
};

// Retrieve all cities from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? {name: {[Op.like]: `%${name}`}} : null;

    Cities.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving all cities' data."
            });
        });
};

// Find a single city with an ID.
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cities.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find city's data with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving city's data with id=${id}`
            });
        });
};

// Update a city's data by the ID in the request.
exports.update = (req, res) => {
    const id = req.params.id;

    Cities.update(req.body, {
        where: { id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "City's data was updated successfully."
                })
            } else {
                res.send({
                    message: `Cannot update city's data with id=${id}. It was either not found or req.body is empty.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating city's data with id=${id}`
            })
        })
};