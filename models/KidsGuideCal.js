module.exports = function (sequelize, DataTypes) {
  var KidsGuideCal= sequelize.define("KidsGuideCal", {
    title: {
        type: DataTypes.STRING,
        unique: true
    },
      description:{
          type:DataTypes.TEXT
      },      
      link:{
          type:DataTypes.TEXT
      }
  },
      {
      timestamps: false
      });
  return KidsGuideCal;
}