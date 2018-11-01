module.exports = function (sequelize, DataTypes) {
  var Restaurants = sequelize.define("Restaurants", {
    title: {
        type: DataTypes.STRING,
        unique: true
    },
      link: {
          type: DataTypes.TEXT
      },
  },
      {
      timestamps: false
      });
  return Restaurants;
}