const Cities = require('./cities.js')

module.exports = (sequelize, Sequelize) => {
    const Archives = sequelize.define("Archives", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
        type: Sequelize.STRING  
        },
        cityId: {
            type: Sequelize.INTEGER,
            defaultValue: 'Unknown city for this archive',
            references: {
                model: Cities,
                key: 'id'
            }
        }
    });
    return Archives;
};