module.exports = function(sequelize, Sequelize) {
 
    var Post = sequelize.define('Post', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        author: {
            type: Sequelize.STRING,
        },
 
        body: {
            type: Sequelize.TEXT
        },

        ownerId: {
            type: Sequelize.INTEGER
        }

 
    });

    Post.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Post.belongsTo(models.Topic, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: "cascade"
        });

        Post.belongsTo(models.User, {
            foreignKey: {
              allowNull: false,
            },
            onDelete: "cascade"
          });

        
      };
    

 
    return Post;
 
}