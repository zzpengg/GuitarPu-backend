/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    singer: {
      type: Sequelize.STRING,
      allowNull: false
    },
    key: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lyrics: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  associations: function() {
    Song.belongsTo(User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
    Song.hasMany(Like);
  },
  options: {
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
