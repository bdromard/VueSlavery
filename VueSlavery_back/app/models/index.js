const dbConfig = require('../config/db.config.js');
const mariaDb = require('mariadb');
const Sequelize = require('sequelize');


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
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

const Slave = require("./slaves.js")(sequelize, Sequelize);
const Owner = require("./owners.js")(sequelize, Sequelize);
const Text = require("./texts.js")(sequelize, Sequelize);

db.slaves = Slave;
db.owners = Owner;
db.texts = Text;
db.cities = require("./cities.js")(sequelize, Sequelize);
db.archives = require("./archives.js")(sequelize, Sequelize);


Slave.belongsToMany(Text, { through: 'SlavesTexts'});
Owner.belongsToMany(Text, { through: 'OwnersTexts'});

module.exports = db;
