const Owners = require("./owners.js");

module.exports = (sequelize, Sequelize) => {
    const Slaves = sequelize.define("Slaves", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        profession: {
            type: Sequelize.BOOLEAN
        },
        owner_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Owners,
                key: 'id'
            }
        },
        archive_id: {
            type: Sequelize.INTEGER
        }
    });
    return Slaves;
};