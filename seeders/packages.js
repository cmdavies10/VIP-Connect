module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Package',
			[
				{
					venue: 'Rockwood',
					artist: 'Adrian Belew',
					date: '2019 - 12 - 23',
					packageInfo: 'Dinner, Backstage, Tourbus',
				},
				{
					venue: 'Bowery',
					artist: 'Nita Strauss',
					date: '2019 - 12 - 25',
					packageInfo: 'Dinner, Backstage, Tourbus',
				},
				{
					venue: 'Blackthorn',
					artist: 'Angel Vivaldi',
					date: '2019 - 12 - 24',
					packageInfo: 'Dinner, Backstage, Tourbus',
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Package', null, {});
	},
};
