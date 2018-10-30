module.exports = function (sequelize, DataTypes) {
    var redTriEvents = sequelize.define("redTriEvents", {
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
        },
        image:{
            type:DataTypes.STRING
        }
    },
        {
        timestamps: false
        });
    return redTriEvents;
}