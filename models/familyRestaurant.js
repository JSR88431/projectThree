module.exports = function (sequelize, DataTypes) {
  var familyRestaurant = sequelize.define("familyRestaurant", {
      title: {
          type: DataTypes.STRING
      },
      link: {
          type: DataTypes.STRING,
      },
      image:{
          type: DataTypes.STRING
      }
  },
      {
      timestamps: false
      });
  return familyRestaurant;
}