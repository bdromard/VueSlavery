module.exports = app => {
  const archives = require("../controllers/archives.controller.js");

  let router = require("express").Router();

  // Create a new archive's data.
  router.post("/", archives.create);
  // Retrieve all archives' data.
  router.get("/", archives.findAll);
  // Retrieve one archive's data with ID.
  router.get("/:id", archives.findOne);
  // Update one text's data with ID.
  router.put("/:id", archives.update);

  app.use("/api/archives", router)
}; 
