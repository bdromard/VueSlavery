module.exports = app => {
  const db = require("../models");

  let router = require("express").Router();

  
  const getTablesNames = async (req, res) => {
  await db.sequelize.query("SHOW TABLES FROM `VueSlaveryDB`;", {
    type: db.sequelize.QueryTypes.SELECT
  })
    .then((result) => {
    res.json(result);
      })
    .catch((error) => {
      res.status(500).json('Query ERROR', error);
    })
  };

  const getColumnsNames = async (req, res) => {
    try {
    const attributes = await db.sequelize.models[`${req.body.model}`].getAttributes()
    res.json(attributes)
    } catch(error) {
      res.status(500).json('Cannot get attributes from table', error)
    }
  };

  // GET route to list all tables' names from database
  router.get('/alltables', getTablesNames)

  // GET route to list columns from a table
  router.post('/allcolumns', getColumnsNames)

  app.use('/api/database', router)
  }
