const dbConfig = require('../config/db.config.js');
const mariaDb = require('mariadb');
const Sequelize = require('sequelize');


async function databaseInit(){
    
    console.log('coucou dbinit')
    // Creating database if it does not exist
    console.log(dbConfig.HOST)
    try {
        const connection = await mariaDb.createConnection({ host: dbConfig.HOST, user: dbConfig.USER, password: dbConfig.PASSWORD})
        console.log('coucou connectmariadb')
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`)}
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
    });

    sequelize.authenticate().then(() => {
        console.log('Succesful connection to the DB')
    }).catch((err) => {
        console.error('Unable to connect', err)});

    console.log('coucou après sequelize connect')
    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.slaves = require("./slaves.js")(sequelize, Sequelize);
    db.owners = require("./owners.js")(sequelize, Sequelize);
    db.cities = require("./cities.js")(sequelize, Sequelize);
    db.archives = require("./archives.js")(sequelize, Sequelize);
    db.texts = require("./texts.js")(sequelize, Sequelize);

    db.slaves.sync();
    db.owners.sync();
    db.cities.sync();
    db.archives.sync();
    db.texts.sync();

    
    return db
    
};

module.exports = 
    databaseInit()
                .then((db) => {
        console.log(db)
        console.log('Promise resolved')
        return db;
    })
    .catch((err) => {
        console.log(err)
    })

