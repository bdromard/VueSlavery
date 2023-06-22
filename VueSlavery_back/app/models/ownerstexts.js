module.exports = (sequelize, Sequelize) => {
  const OwnersTexts = sequelize.define("OwnersTexts", {
  ownerId: DataTypes.INTEGER,
  textId: DataTypes.INTEGER
  }, {});
  OwnersTexts.associate = function(models){
    OwnersTexts.belongsTo(models.Owners, {foreignKey: 'ownerId'})
    OwnersTexts.belongsTo(models.Texts, {foreignKey: 'textId'})
  };
  return OwnersTexts;
};
