const db = require('../models');
const OwnersTexts = db.ownerstexts;

// Retrieve all relations between owners and textual sources.
exports.findAll = (req, res) => {
  
  OwnersTexts.findAll({
    include: [
      {
        model: 'OwnersTexts',
        as: 'Texts',
        attributes: ['ownerId', 'textId'],
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
             err.message || 'Error while retrieving all textual references to owners'
      })
    });
};

exports.findOneByOwner = (req, res) => {
  const ownerId = req.params.ownerId

  OwnersTexts.findByPk(ownerId)
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
