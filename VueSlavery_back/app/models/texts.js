module.exports = (sequelize, Sequelize) => {
    const Texts = sequelize.define("Texts", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reference: {
            type: Sequelize.STRING,
            allowNull: false
        },
        textType: {
            type: Sequelize.STRING       
        },
        summary: {
            type: Sequelize.TEXT
        }, 
        cityId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Cities',
                key: 'id'
            }
        },
        archiveId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Archives',
                key: 'id'
            }
        }
        
    });
    return Texts;
};