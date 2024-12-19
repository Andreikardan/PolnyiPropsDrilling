module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        topic_id: 1,
        question: 'Сколько максимальных мутаций сейчас есть у эльбрусовца?',
        answer: '3',
        points: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 1,
        question: 'На какой высоте находится вершина Эльбруса?',
        answer: '12',
        points: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 1,
        question: 'Главный злодей Эльбруса',
        answer: 'бэд гай',
        points: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 1,
        question: 'Сколько эльбрусовцев надо что бы написать квиз за 3 часа?',
        answer: '1',
        points: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 1,
        question: 'Когда день рождение у максима?',
        answer: 'через 2 дня',
        points: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 2,
        question: 'Чего всегда не хватает?',
        answer: 'всего',
        points: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 2,
        question: 'Сколько стоит средний поход к стоматологу?',
        answer: '3000',
        points: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 2,
        question: 'Любимый звук',
        answer: 'уведомление пополнения баланса',
        points: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 2,
        question: 'Стоит дом, в нём живут, каждый месяц платят труд. Не уплатишь — дом не твой. Что же это за отбой?',
        answer: 'ипотека',
        points: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 2,
        question: 'Его часто ищут ночью, но днем он становится ненужным. Что это?',
        answer: 'сон',
        points: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 3,
        question: 'Ты едешь в поезде, прикованный к рычагам, ими можно повернуть или влево, или вправо. Впереди развилка — справа мать к столбу привязана, слева кенты, человек десять. Куда свернешь, кого задавишь?',
        answer: 'проснусь',
        points: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 3,
        question: 'Сидит зек на шконаре, открывают кормушку и дают баланду, хлеб сухой. Утром опять открывают кормушку и видят кости. Вопрос: откуда кости, если зек живой?',
        answer: 'игральные',
        points: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 3,
        question: 'Рисуют на стене футбольные ворота, а на полу — мяч. Говорят забить гол. Что будешь делать?',
        answer: 'попрошу дать пас',
        points: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 3,
        question: 'Тебе дают в руки веник и говорят: «Сыграй на гитаре что-нибудь». Что скажешь?',
        answer: 'сначала настрой',
        points: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic_id: 3,
        question: 'Просят сыграть на батарее, как на баяне. Что будешь делать?',
        answer: 'попрошу раздуть меха',
        points: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
