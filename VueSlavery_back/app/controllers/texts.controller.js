const db = require('../models');
const Texts = db.texts;
const Cities = db.cities;
const Archives = db.archives;
const Op = db.Sequelize.Op;



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

const findCityId = async (cityName) => {
  try {
  const response = await Cities.findOne({
    where: {
      name: cityName
    }
  })
  return response['dataValues']['id']
  }
  catch(error) {
    console.log(error)
  }
}

// Texts
// Create and save a new text

exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

const cityId = await findCityId(req.body.city);
const archiveId = await findArchiveId(req.body.archive);

const text = {
    id: req.body.id,
    reference: req.body.reference,
    textType: req.body.textType,
    summary: req.body.summary,
    cityId: cityId,
    archiveId: archiveId
}

Texts.create(text)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating the text's data"
        });
    });
};

exports.findAll = (req, res) => {

    Texts.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving all texts' data."
            });
        });
};

// Find a single text with an ID.
exports.findOne = (req, res) => {
    const id = req.params.id;

    Texts.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find text's data with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving text's data with id=${id}`
            });
        });
};

// Update a text's data by the ID in the request.
exports.update = (req, res) => {
    const id = req.params.id;

    Texts.update(req.body, {
        where: { id: id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Text's data was updated successfully."
                })
            } else {
                res.send({
                    message: `Cannot update text's data with id=${id}. It was either not found or req.body is empty.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating text's data with id=${id}`
            })
        })
};
