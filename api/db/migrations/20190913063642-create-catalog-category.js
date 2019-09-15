'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('CatalogCategories', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING(255)
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
      queryInterface.dropTable('CatalogCategories'),
    ]);
  }
};