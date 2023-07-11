module.exports = app => {
    const slaves = require("../controllers/slaves.controller.js");
    
    let router = require("express").Router();

    // Create a new slave's data.
    router.post("/create", slaves.create);
    // Retrieve all slaves' data.
    router.get("/findAll", slaves.findAll);
    // Retrieve one slave's data with ID.
    router.get("/:id", slaves.findOne);
    // Update one slave's data with ID.
    router.put("/:id", slaves.update);

    app.use("/api/slaves", router)
    
};
