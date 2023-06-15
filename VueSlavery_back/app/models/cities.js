module.exports = (sequelize, Sequelize) => {
    const Cities = sequelize.define("Cities", {
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
    });
    return Cities;
};