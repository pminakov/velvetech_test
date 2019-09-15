'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('CatalogItems', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING(40),
          allowNull: false
        },
        price: {
          type: Sequelize.DECIMAL(15,2),
          allowNull: false,
          defaultValue: 0,
        },
        expires: {
          allowNull: false,
          type: Sequelize.DATE
        },
        categoryId: {
          type: Sequelize.INTEGER,
	        allowNull: false,
          defaultValue: 0,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('CatalogItems'),
    ]);
  }
};