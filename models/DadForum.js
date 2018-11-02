module.exports = function (sequelize, DataTypes) {
  var DadForum = sequelize.define("DadForum", {
      title: {
          type: DataTypes.TEXT,
      },
      description:{
          type:DataTypes.TEXT
      },
  },
      {
      timestamps: false
      });
  return DadForum;
}