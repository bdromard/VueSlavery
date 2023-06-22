const db = require('../models');
const SlavesTexts = db.slavestexts;

// Retrieve all relations between slaves and textual sources.
exports.findAll = (req, res) => {
  
  SlavesTexts.findAll({
    include: [
      {
        model: 'SlavesTexts',
        as: 'Texts',
        attributes: ['slaveId', 'textId'],
        through: {
          attributes: [],
        }
      }
    ]
  })
    .then(data => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
             err.message || 'Error while retrieving all textual references to slaves'
      })
    });
};

exports.findOneBySlave = (req, res) => {
  const slaveId = req.params.slaveId

  SlavesTexts.findByPk(ownerId)
    .then((data) => {
        if (data){
          res.send(data);
        } else {
          res.status(404).send({
          message: `Cannot find textual references with with id=${ownerId}`
           });
          }   
        })
    .catch(err => {
        res.status(500).send({
        message: `Error while retrieving textual references with id=${ownerId}`
        });
    });
};
