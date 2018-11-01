module.exports = function (sequelize, DataTypes) {
    var RedTriHacks = sequelize.define("RedTriHacks", {
        title: {
            type: DataTypes.STRING,
            unique: true
        },

        link: {
            type: DataTypes.TEXT
        },
    
    },
        {
        timestamps: false
        });
    return RedTriHacks;
}