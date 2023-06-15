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
            type: Sequelize.BOOLEAN,
            defaultValue: 'Unknown profession for this slave.'
        },
        archiveId: {
            type: Sequelize.INTEGER,
            defaultValue: 'Unknown attributed archive for this slave'
        }
    });
    return Slaves;
};