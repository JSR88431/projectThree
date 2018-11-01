module.exports = function (sequelize, DataTypes) {
  var Donate = sequelize.define("Donate", {
      title: {
          type: DataTypes.STRING,
          unique: true,
      },
      address:{
          type:DataTypes.TEXT
      },
      description:{
          type:DataTypes.TEXT
      },        
      link:{
        type:DataTypes.TEXT
    },   
  },
      {
      timestamps: false
      });
  return Donate;
}