module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Topics', [
      {
        title: 'Эльбрус',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '18+',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Auth',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
