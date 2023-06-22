module.exports = (sequelize, Sequelize) => {
  const SlavesTexts = sequelize.define("SlavesTexts", {
  slaveId: DataTypes.INTEGER,
  textId: DataTypes.INTEGER
  }, {});
  SlavesTexts.associate = function(models){
    SlavesTexts.belongsTo(models.Slaves, {foreignKey: 'slaveId'})
    SlavesTexts.belongsTo(models.Texts, {foreignKey: 'textId'})
  };
  return SlavesTexts;
};
