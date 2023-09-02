const db = require('../models/index.js');
const Slaves = db.slaves;
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

// Slaves
// Create and save a new slave.
exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

  
const archiveId = await findArchiveId(req.body.archive);

const slave = {
    id: req.body.id,
    name: req.body.name,
    owner: req.body.owner,
    gender: req.body.gender,
    profession: req.body.profession,
    archiveId: archiveId
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

  // Sequelize Model update returns an array with one element if there are affected rows. 
    Slaves.update(req.params, {
        where: { id: id}
    })
        .then(arrayLength => {
            if (arrayLength == 1){
                res.send({
                    message: "Slave's data was updated successfully."
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
    })
}
