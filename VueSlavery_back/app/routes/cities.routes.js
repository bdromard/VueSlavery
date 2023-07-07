module.exports = app => {
  const cities = require("../controllers/cities.controller.js");

  let router = require("express").Router();

  // Create a new city's data.
  router.post("/create", cities.create);
  // Retrieve all cities' data.
  router.get("/findAll", cities.findAll);
  // Retrieve one city's data with ID.
  router.get("/:id", cities.findOne);
  // Update one city's data with ID.
  router.put("/:id", cities.update);

  app.use("/api/cities", router)
};
