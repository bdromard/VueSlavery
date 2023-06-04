const Slaves = require('./slaves.js')

module.exports = (sequelize, Sequelize) => {
    const Owners = sequelize.define("Owners", {
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
        slave_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Slaves,
                key: 'id'
            }
        },
        archive_id: {
            type: Sequelize.INTEGER
        }
    });
    return Owners;
};