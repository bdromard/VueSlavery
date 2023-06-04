module.exports = (sequelize, Sequelize) => {
    const Cities = sequelize.define("Cities", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
        type: Sequelize.STRING  
        },
    });
    return Cities;
};