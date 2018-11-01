module.exports = function (sequelize, DataTypes) {
    var Restaurants = sequelize.define("Restaurants", {
        title: {
            type: DataTypes.TEXT
        },
        link: {
            type: DataTypes.TEXT
        },
        // image: {
        //     type: DataTypes.TEXT
        // }
    },
        {
        timestamps: false
        });
    return Restaurants;
  }
