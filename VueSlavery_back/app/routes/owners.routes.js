module.exports = app => {
    const owners = require("../controllers/owners.controller.js");
    let router = require("express").Router();

    // Create a new owner's data.
    router.post("/", owners.create);
    // Retrieve all owners' data.
    router.get("/", owners.findAll);
    // Retrieve one owner's data with ID.
    router.get("/:id", owners.findOne);
    // Update one owner's data with ID.
    router.put("/:id", owners.update);

    app.use("/api/owners", router)
}