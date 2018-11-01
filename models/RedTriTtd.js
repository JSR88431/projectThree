module.exports = function (sequelize, DataTypes) {
  var RedTriTtd = sequelize.define("RedTriTtd", {
    title: {
      type: DataTypes.STRING
    },
    link: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false
    });
  return RedTriTtd;
}