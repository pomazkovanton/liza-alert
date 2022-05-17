'use strict';

module.exports = {
  // Добавим описание на русском языке ко всем типам
  types: [
    { value: ':bug: fix', name: '🐛 fix:\tИсправление ошибок' },
    { value: ':memo: docs', name: '📝 docs:\tОбновление документации' },
    { value: ':sparkles: feat', name: '✨ feat:\tДобавление нового функционала' },
    {
      value: ':lipstick: style',
      name: '💄 style:\tПравки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
    },
    {
      value: ':construction_worker: build',
      name: '👷 build:\tСборка проекта или изменения внешних зависимостей',
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf:\tИзменения направленные на улучшение производительности',
    },
    {
      value: ':recycle: refactor',
      name: '♻️ refactor:\tПравки кода без исправления ошибок или добавления новых функций',
    },
    { value: ':rewind: revert', name: '⏪️ revert:\tОткат на предыдущие коммиты' },

    { value: ':white_check_mark: test', name: '✅ test:\tДобавление тестов' },
    { value: ':green_heart: ci', name: '💚 ci:\tНастройка CI и работа со скриптами' },
  ],

  // Область. Она характеризует фрагмент кода, которую затронули изменения
  scopes: [{ name: 'components' }, { name: 'tutorial' }, { name: 'catalog' }, { name: 'product' }],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  /*
  scopeOverrides: {
    fix: [
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  // Поменяем дефолтные вопросы
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: '\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):',
    // Спросим если allowCustomScopes в true
    customScope: 'Укажите свою ОБЛАСТЬ:',
    subject: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n',
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: 'Список BREAKING CHANGES (опционально):\n',
    footer: 'Место для мета данных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: 'МЕТА ДАННЫЕ:',

  // limit subject length
  subjectLimit: 72,
};
