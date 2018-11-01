module.exports = function (sequelize, DataTypes) {
  var Restaurants = sequelize.define("Restaurants", {
      title: {
          type: DataTypes.STRING
      },
      link: {
          type: DataTypes.STRING,
      }
    //   image: {
    //       type: DataTypes.STRING,
    //   }
  },
      {
      timestamps: false
      });
  return Restaurants;
}