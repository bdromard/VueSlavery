const Cities = require('./cities.js')

module.exports = (sequelize, Sequelize) => {
    const Archives = sequelize.define("Archives", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
        type: Sequelize.STRING  
        },
        city_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Cities,
                key: 'id'
            }
        }
    });
    return Archives;
};