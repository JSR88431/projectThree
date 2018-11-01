module.exports = function (sequelize, DataTypes) {
  var KidsGuideCal= sequelize.define("KidsGuideCal", {
      title: {
          type: DataTypes.STRING
      },
      description:{
          type:DataTypes.STRING
      },      
      link:{
          type:DataTypes.STRING
      }
  },
      {
      timestamps: false
      });
  return KidsGuideCal;
}