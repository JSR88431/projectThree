module.exports = function (sequelize, DataTypes) {
    var campClasses = sequelize.define("campClasses", {
        title: {
            type: DataTypes.STRING
        },
        link: {
            type: DataTypes.STRING,
        },
    },
        {
        timestamps: false
        });
    return campClasses;
}