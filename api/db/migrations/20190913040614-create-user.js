'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        email: {
          type: Sequelize.STRING(255),
	        allowNull: false,
        },
        password: {
          type: Sequelize.STRING(255),
	        allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('Users'),
    ]);
  }
};