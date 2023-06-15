const dotenv = require('dotenv');
const dbConfig = require('../config/db.config.js');
const mariaDb = require('mariadb');
const Sequelize = require('sequelize');
dotenv.config({ path: '/home/virgilisdead/ada/projets_perso/VueSlavery/VueSlavery_back/.env'});

async function databaseInit(){
    
    console.log('coucou dbinit')
    // Creating database if it does not exist
    try {
        const { HOST, USER, PASSWORD, DB } = dbConfig;
        console.log(dbConfig.HOST)
        console.log(DB)
        const connection = await mariaDb.createConnection({ HOST, port:3306, USER, PASSWORD})
        console.log('coucou connectmariadb')
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB}\`;`)}
    catch(err) {
        console.log(err)
    }

    // Sequelize connection
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
    }
);
    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.slaves = require("./slaves.js")(sequelize, Sequelize);
    db.owners = require("./owners.js")(sequelize, Sequelize);
    db.cities = require("./cities.js")(sequelize, Sequelize);
    db.archives = require("./archives.js")(sequelize, Sequelize);
    db.texts = require("./texts.js")(sequelize, Sequelize);
    module.exports = db;
    
}


databaseInit();