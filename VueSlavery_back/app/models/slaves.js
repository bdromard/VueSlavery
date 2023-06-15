const Archives = require('./archives.js')

module.exports = (sequelize, Sequelize) => {
    const Slaves = sequelize.define("Slaves", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            defaultValue: 'Unknown gender for this slave.'
        },
        profession: {
            type: Sequelize.STRING,
            defaultValue: 'Unknown profession for this slave.'
        },
        archiveId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Archives',
                key: "id"
            }
        }
    });
    return Slaves;
};