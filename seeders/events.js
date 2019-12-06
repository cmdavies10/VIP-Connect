module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Events',
			[
				{
					venue: 'Rockwood',
					artist: 'Adrian Belew',
					date: '2019 - 12 - 23',
					packages: 'Dinner, Backstage, Tourbus',
				},
				{
					venue: 'Bowery',
					artist: 'Nita Strauss',
					date: '2019 - 12 - 25',
					packages: 'Dinner, Backstage, Tourbus',
				},
				{
					venue: 'Blackthorn',
					artist: 'Angel Vivaldi',
					date: '2019 - 12 - 24',
					packages: 'Dinner, Backstage, Tourbus',
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Events', null, {});
	},
};
