module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					username: 'Fakeguy',
					password: 'password',
				},
				{
					username: 'Notrealguy',
					password: 'password',
				},

				// { googleId: 'example' },
			]
			// {}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
		return queryInterface.bulkDelete('Users', null, {});
	},
};
