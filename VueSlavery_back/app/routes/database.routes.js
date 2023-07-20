module.exports = app => {
  const db = require("../models");

  let router = require("express").Router();

  
  const getTables = async (req, res) => {
  await db.sequelize.query("SHOW TABLES FROM `VueSlaveryDB`;", {
    type: db.sequelize.QueryTypes.SELECT
  })
    .then((result) => {
    res.json(result)
      })
    .catch((error) => {
      console.log('Query ERROR', error)
    })
  }

  router.get('/alltables', getTables)

  app.use('/api/database', router)
  }
