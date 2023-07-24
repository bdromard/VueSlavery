const db = require('../models');
const Archives = db.archives;
const Cities = db.cities;
const Op = db.Sequelize.Op;

// Create async function that will find data from Cities table, to add cityId with city written as input in form

const findCityId = async(cityName) => {
  try {
  const response = await Cities.findOne({
    where: {
      name: cityName
    }
  })
  const data = response.json()
  const id = data['id']
  return id
  }
  catch(error) {
    console.log(error)
  }
}
// Archives
// Create and save a new archive.
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

const archive = {
    id: req.body.id,
    name: req.body.name,
    cityId: findCityId(req.body.city),
    }

Archives.create(archive)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the archive's data."
        });
    });
};

// Retrieve all archives from the database.
exports.findAll = (req, res) => {

    Archives.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving all archives' data."
            });
        });
};

// Find a single archive with an ID.
exports.findOne = (req, res) => {
    const id = req.params.id;

    Archives.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find archive's data with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving archive's data with id=${id}`
            });
        });
};

// Update a archive's data by the ID in the request.
exports.update = (req, res) => {
    const id = req.params.id;

    Cities.update(req.body, {
        where: { id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Archive's data was updated successfully."
                })
            } else {
                res.send({
                    message: `Cannot update archive's data with id=${id}. It was either not found or req.body is empty.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating archive's data with id=${id}`
            })
        })
};
