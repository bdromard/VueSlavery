module.exports = (sequelize, Sequelize) => {
    const Owners = sequelize.define("Owners", {
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
            defaultValue: 'Unknown gender for this owner.'
        },
        archiveId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Archives',
                key: 'id'
            }
        }
    });
    return Owners;
};