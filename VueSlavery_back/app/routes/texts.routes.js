module.exports = app => {
  const texts = require("../controllers/texts.controller.js");

  let router = require("express").Router();

  // Create a new text's data.
  router.post("/", texts.create);
  // Retrieve all texts' data.
  router.get("/", texts.findAll);
  // Retrieve one text's data with ID.
  router.get("/:id", texts.findOne);
  // Update one text's data with ID.
  router.put("/:id", texts.update);

  app.use("/api/texts", router)
};
