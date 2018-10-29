module.exports = function (sequelize, DataTypes) {
    var laCurbed = sequelize.define("laCurbed", {
        title: {
            type: DataTypes.STRING
        },

        link: {
            type: DataTypes.STRING
        },
        description:{
            type:DataTypes.TEXT
        },
        descriptionTwo:{
            type:DataTypes.TEXT
        },
        address:{
            type:DataTypes.STRING
        }
    },
        {
        timestamps: false
        });
    return laCurbed;
}