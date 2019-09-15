'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
	  const user = await queryInterface.rawSelect('Users', {
		  where: {
			  email: 'admin@example.com',
		  },
	  }, ['id']);
	  if (!user) {
		  const now = new Date();
		  return Promise.all([
			  queryInterface.bulkInsert('Users', [
				  {email: 'admin@example.com', password: '12345', createdAt: now, updatedAt: now},
			  ])
		  ]);
	  }
	  return Promise.resolve();
  },

  down: (queryInterface, Sequelize) => {
	  return Promise.all([
		  queryInterface.bulkDelete('Users', {email: 'admin@example.com'}, {}),
	  ]);
  }
};
