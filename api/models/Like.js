/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    userid: {
      unique: true,
      type: Sequelize.STRING,
      allowNull: false
    },
    songid: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  associations: function() {
    Like.hasMany(Song);
    Like.hasMany(User);
  },
  options: {
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};
