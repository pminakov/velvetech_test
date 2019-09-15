'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
	  const defaultCategory = await queryInterface.rawSelect('CatalogCategories', {
		  where: {
			  id: 0,
		  },
	  }, ['id']);
	  if (defaultCategory !== 0) {
		  const now = new Date();
		  return Promise.all([
			  queryInterface.bulkInsert('CatalogCategories', [
				  {id: 0, name: 'Default category', createdAt: now, updatedAt: now},
			  ]),
		  ]);
	  }
	  return Promise.resolve()
  },

  down: async (queryInterface, Sequelize) => {
	  return Promise.all([
	    queryInterface.bulkDelete('CatalogCategories', {id: 0}, {}),
    ]);
  }
};
