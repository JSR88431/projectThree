module.exports = function (sequelize, DataTypes) {
  var RedTriTtd = sequelize.define("RedTriTtd", {
    title: {
      type: DataTypes.TEXT
    },
    link: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.TEXT
    }
  },
    {
      timestamps: false
    });
  return RedTriTtd;
}