module.exports = function (sequelize, DataTypes) {
    var Vacations = sequelize.define("Vacations", {
        title: {
            type: DataTypes.STRING
        },
        link: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING 
        }
    },
        {
        timestamps: false
        });
    return Vacations;
}