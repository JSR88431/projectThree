module.exports = function (sequelize, DataTypes) {
    var laCurbed = sequelize.define("laCurbed", {
        title: {
            type: DataTypes.TEXT,
        },
        description:{
            type:DataTypes.TEXT
        },
        // descriptionTwo:{
        //     type:DataTypes.TEXT
        // },
        address:{
            type:DataTypes.TEXT
         },        
        link: {
         type:DataTypes.TEXT
            }
        // image: {
        //     type: DataTypes.TEXT 
        // }
    },
        {
        timestamps: false
        });
    return laCurbed;
}