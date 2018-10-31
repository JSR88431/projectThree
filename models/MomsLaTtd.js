module.exports = function (sequelize, DataTypes) {
  var MomsLaTtd = sequelize.define("MomsLaTtd", {
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
  return MomsLaTtd;
}