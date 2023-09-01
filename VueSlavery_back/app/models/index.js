const dbConfig = require('../config/db.config.js');
const mariaDb = require('mariadb');
const Sequelize = require('sequelize');


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    define: {
        timestamps: false
    },
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.slaves = require("./slaves.js")(sequelize, Sequelize);
db.owners = require("./owners.js")(sequelize, Sequelize);
db.texts = require("./texts.js")(sequelize, Sequelize);
db.cities = require("./cities.js")(sequelize, Sequelize);
db.archives = require("./archives.js")(sequelize, Sequelize);


db.slaves.belongsToMany(db.texts, { through: 'SlavesTexts'});
db.owners.belongsToMany(db.texts, { through: 'OwnersTexts'});

module.exports = db;
