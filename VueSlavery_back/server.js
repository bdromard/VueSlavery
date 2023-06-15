const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");


var corsOptions = {
    origin: "https://localhost:5173"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.get("/", (request, response) => {
    response.json({ message: "Welcome to VueSlavery, a project based on Benjamin Dromard's PhD research.", 
    newMessage: "Hello hello", slaves: `${db.slaves}`})
});
 
require("./app/routes/slaves.routes.js")(app);
require("./app/routes/owners.routes.js")(app);
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});

db.sequelize.sync();

