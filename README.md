# Простое веб-приложение
Простое веб-приложение с использованием фреймворка Express.js для Node.js. Создание базового приложения, которое будет обслуживать статические файлы и обрабатывать несколько маршрутов.

## Содержание
- [Простое веб-приложение](#простое-веб-приложение)
  - [Содержание](#содержание)
  - [Технологии](#технологии)
  - [Разработка](#разработка)
    - [Требования](#требования)
    - [Запуск](#запуск)
  - [Тестирование](#тестирование)
  - [To do](#to-do)
  - [Автор проекта](#автор-проекта)

## Технологии
- [Официальная документация Express.js](https://expressjs.com/ru/starter/installing.html)
- [Пример простого Express-приложения](https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/Introduction)

## Разработка
### Требования
Для установки и запуска проекта, необходимо:
- Установить Node.js на свою машину, следуя инструкциям на официальном сайте (https://nodejs.org), к примеру, на MacOs:
  ```sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  . $NVM_DIR/nvm.sh
  nvm install 20
  ```
- Установите Express.js с помощью npm:
  ```sh
  npm install express --save
  ```

### Запуск
Чтобы запустить проект, перейдите в репозиторий и выполните команду:
```sh
node app.js
```

## Тестирование
Откройте браузер и перейдите по адресу http://localhost:3000, чтобы увидеть главную страницу приложения. Вы должны увидеть сообщение "Добро пожаловать в простое приложение Express!"

Проверьте работу других маршрутов, перейдя по адресам http://localhost:3000/about и http://localhost:3000/nonexistent. После перехода на первый адрес, будет выведено сообщение "Это простое приложение на Express.js", после перехода по второму адресу: "Страница не найдена"

## To do
- [✓] Установить Node.js и Express.js
- [✓] Создать базовое приложение Express
- [✓] Обслужить статические файлы
- [✓] Обработать дополнительные маршруты
- [✓] Запустить приложение
- [✓] Добавить краткую документацию

## Автор проекта
Чезрякова Юлия (tg: @uliachez) - студентка 1 курса НИУ ВШЭ
