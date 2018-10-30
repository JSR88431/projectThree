module.exports = function (sequelize, DataTypes) {
  var MomsLaClasses = sequelize.define("MomsLaClasses", {
    title: {
      type: DataTypes.STRING
    },

    link: {
      type: DataTypes.STRING
  }
  ,
    description: {
      type: DataTypes.STRING
    },

    image: {
      type: DataTypes.STRING
    }   
  },
      {
      timestamps: false
      });
  return MomsLaClasses;
}