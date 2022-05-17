# Шаблон для командной работы

## Используемые технологии

- prettier
- stylelint
- commitizen
- editorconfig

## Установка и настройка

### Необходимые расширения

#### [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Stylelint — это гибкий инструмент для линтинга стилей, который не только отлавливает ошибки, но и помогает соблюдать соглашения по стилю кода и применяемым практикам.

В проекте используется базовый конфиг для stylelint с правилами Prettier, код гайдом [Standart (AirBnB)](https://openbase.com/js/stylelint-config-airbnb/documentation) и [rational order.](https://github.com/constverum/stylelint-config-rational-order)

#### Дополнительные настройки:

В vscode нажимаем сочетание клавиш `ctr+shift+p` пишем в строке JSON и выбираем пункт: Параметры: Открыть параметры (JSON) и вставляем в открывшемся файле следующий код, если его нет

```
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll"],
"css.validate": false,
"less.validate": false,
"scss.validate": false
```

#### [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Prettier – инструмент для автоформатирования кода с поддержкой кучи инструментов

#### [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

EditorConfig это конфигурационный файл и набор расширений, к большому количеству редакторов кода и IDE (Далее просто IDE). Его задача — создать единый формат настроек, и, раз и навсегда, решить вопросы вроде “табы или пробелы” для всех IDE и всех языков программирования.

### Необходимые инструменты

#### [Commitizen](https://commitizen-tools.github.io/commitizen/)

Этот инструмент позволяет генерировать коммиты при помощи встроенного визарда. Кроме того, commitizen хорошо поддерживается сообществом и, благодаря дополнительным модулям, отлично настраивается.

Пакет необходимо установить глобально

```
npm i -g commitizen
```

#### Для чего нужен:

Поможет генерировать сообщения коммитов исходя из методологии [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

#### Как работать:

Работа с гитом практически не изменится, кроме команды `git commit`, её заменяем на `git cz` и следуем инструкциям в терминале

### Установка зависимостей

Перед началом работы необходимо с репозитория подтянуть все необходимые зависимости, для этого перейдите в папку с проектом и выполните следующую команду

```
npm i
```

### Порядок работы

- Все работы проводим только в ветке `develop`
- Заходим в [Trello](https://trello.com/b/fY9T2OKj/workspace-02) и из столбца Task выбираем себе задачу (нажимаем на карточку и слева внизу нажимаем кнопку "Взять в работу"). Это покажет остальным членам команды что задача уже в работе
- Далее переходим по ссылке в карточке к issue и отмечаемся там (в поле Assignees выбираем assign yourself)
- Дальше находятся в ветке `develop` выполняем команду `git pull`, чтобы забрать последние изменения из удаленного репозитория.
- Создаем ветку под свою задачу, например для создания кнопки,ветку можно назвать **features/button**, для этого нужно выполнить следующую команду:
  `git checkout -b features/button`
- Далее ведем разработку только в этой ветке, пока задача не будет выполнена. Лучше задание раздробить на более атомарные кусочки кода и делать коммиты. Алгоритм создания коммита следующий:

```
git status
git add . / или только нужные файлы
git cz
```

- Далее стрелками выбираем тип коммита, если это новый функционал то выбирайте **feat**, если это исправление ошибок, тогда **fix** и тд.
- Далее выбираем **empty**
- Далее пишете заголовок коммита, кратко и по существу, что делает данный коммит, например: `"добавляет эффект при наведении на кнопку"`. Заголовок пишем со строчной буквы и в конце не ставим точку, вместо нее ставим пробел и пишим #номер issue, например `"добавляет эффект при наведении на кнопку #3"`? это поможет связать ваши коммиты с issue.
- Далее пишете тело коммита, по необходимости. Тут можно более развернуто описать что делает ваш коммит
- Остальные пункты пропускаете нажатием enter
- Как закончите разработку своего функционала, протестируете его в различных браузерах и в валидаторе
- Далее ваши изменения необходимо запушить на github, для этого выполните следующую команду:

```
git push origin ваша_ветка
```

- В интерфейсе github создайте pull request. Важно первой веткой выберите ветку `develop`, а второй уже свою.
- Выберете в качестве ревью всех членов команды и если команда согласится с изменениями, ветка будет слита в develop.
- В интерфейсе Trello переносим свою карточку в раздел ревью
- После слияния веток можно удалить ветку как на локальном, так и на удаленном репозитории и вытянуть новые изменения к себе на компьютер

```
git checkout develop
git pull
git branch -D features/button //Удаляет ветку

```

- Перенесите свой таск в Trello в столбик с выполненными
- Далее повторяете все шаги заново
