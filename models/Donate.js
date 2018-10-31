module.exports = function (sequelize, DataTypes) {
  var Donate = sequelize.define("Donate", {
      donateInfo: {
          type: DataTypes.STRING
      },

      title: {
          type: DataTypes.STRING
      },
    
      address:{
          type:DataTypes.STRING
      },
      description:{
          type:DataTypes.STRING
      },        
      link:{
        type:DataTypes.STRING
    },   
  },
      {
      timestamps: false
      });
  return Donate;
}