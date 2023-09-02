const db = require('../models');
const Owners = db.owners;
const Archives = db.archives;
const Op = db.Sequelize.Op;

//Create async function that will find data from Archives table, to add archiveId with archive written as input in form.

const findArchiveId = async (archiveName) => {
  try {
  const response = await Archives.findOne({
    where: {
      name: archiveName
    }
  })
  return response['dataValues']['id']
  }
  catch(error) {
    console.log(error)
  }
}

// Owners
// Create and save a new owner
exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    const archiveId = await findArchiveId(req.body.archive);

    const owner = {
        id: req.body.id,
        name: req.body.name,
        gender: req.body.gender,
        archiveId: archiveId
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
    
  // Sequelize Model update returns an array with one element if there are affected rows. 

        Owners.update(req.body, {
            where: { id: id}
        })
            .then(arrayLength => {
                if (arrayLength == 1){
                    res.send({
                        message: "Owner's data was updated successfully."
                    })
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: `Error updating owner's data with id=${id}`
                })
            })
    };
