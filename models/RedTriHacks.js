module.exports = function (sequelize, DataTypes) {
    var RedTriHacks = sequelize.define("RedTriHacks", {
        title: {
            type: DataTypes.TEXT
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