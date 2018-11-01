module.exports = function (sequelize, DataTypes) {
  var MomsLaClasses = sequelize.define("MomsLaClasses", {
    title: {
      type: DataTypes.STRING,
      unique: true
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