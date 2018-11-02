module.exports = function (sequelize, DataTypes) {
    var CalendarModel = sequelize.define("Vacations", {
        title: {
            type: DataTypes.STRING,
            unique: true
        },
        link: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.TEXT
        },
        Date:{
            type: DataTypes.TEXT
        }
    },
        {
        timestamps: false
        });
    return CalendarModel;
    }