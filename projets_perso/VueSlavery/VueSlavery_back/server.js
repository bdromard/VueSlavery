const dotenv = require('dotenv');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

dotenv.config();

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
 

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});

const db = require("./app/models");



db.sequelize.sync();

