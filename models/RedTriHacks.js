module.exports = function (sequelize, DataTypes) {
    var RedTriHacks = sequelize.define("RedTriHacks", {
        title: {
            type: DataTypes.STRING
        },

        link: {
            type: DataTypes.STRING
        }
    },
        {
        timestamps: false
        });
    return RedTriHacks;
}