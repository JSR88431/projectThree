module.exports = function (sequelize, DataTypes) {
    var Vacations = sequelize.define("Vacations", {
        title: {
            type: DataTypes.STRING,
            unique: true
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
    return Vacations;
    }