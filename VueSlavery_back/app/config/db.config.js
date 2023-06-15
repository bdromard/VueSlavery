module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_LOGIN,
    PASSWORD : process.env.DB_PASSWORD,
    DB: "VueSlaveryDB",
    dialect: "mariadb",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

