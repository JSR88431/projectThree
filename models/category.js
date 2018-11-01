module.exports = function (sequelize, Sequelize) {

    var Category = sequelize.define('Category', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        description: {
            type: Sequelize.STRING,
        },

        title: {
            type: Sequelize.STRING,
        }

    });

    Category.associate = function(models) {
        // Associating Category with Posts
        // When an Category is deleted, also delete any associated Posts
        Category.hasMany(models.Topic, {
          foreignKey: {
            allowNull: false,
            onDelete: "cascade"
          }
        });
      };



    return Category;

}