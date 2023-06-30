module.exports = (sequelize, Sequelize) => {
    const Archives = sequelize.define("Archives", {
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
        cityId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Cities',
                key: 'id'
            }
        }
    });
    return Archives;
};
