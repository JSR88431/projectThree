module.exports = function (sequelize, DataTypes) {
  var MomsLaClasses = sequelize.define("MomsLaClasses", {
    title: {
      type: DataTypes.TEXT
    },

    link: {
      type: DataTypes.TEXT
  }
  ,
    description: {
      type: DataTypes.TEXT
    },

    image: {
      type: DataTypes.TEXT
    }   
  },
      {
      timestamps: false
      });
  return MomsLaClasses;
}