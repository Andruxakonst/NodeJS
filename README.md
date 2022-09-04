# Тестовое задание на Junior Developer NodeJS Инсайд

## Запуск системы при помощи docker

- Установите Docker на свой пк
- Сказчатьй Docker контейнер при помощи команды docker push andruxakonst/nodejs:tagname
- Запустите контейнер командой docker run -p <входящийПорт>:5000 --name nodejs andruxakonst/nodejs
- После успешного запуска система будет доступна по адресу http://localhost:5000/

## Обзор контенера системы

В Docker контейнере запущены 3 образа. 
1) Само приложение на Node.js
2) База данных MySQL с тестовой базой данных
3) adminer для администрирования базы данных

## Работа с системой

В системе реализованы 2 эндпоинта
| Запрос | Отписание |
| ------ | ------ |
| Login | [/user/login][PlDb] |
| Send | /user/send][PlGh] |

По остальным запросам система ответит ошибкой 404

## Работа с эндпоинтами

#### /user/login

Применяется для получения JWT токена пользователя необходимого для выполнения запросов:
> Note: Для успешного получения токена в теле запрос необходимо передать имя пользователя и пароль в формате JSON. Поля JSON name - имя пользователя, password - пароль. Пользователь должен присутствовать в таблице user базы данных

```sh
curl --location --request POST 'http://localhost:5000/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "user1",
    "password": "12345678"
}'
```

#### /user/send

Применяется для отправки сообщения и получения истории сообщений:
> Note: В секции header HTTP POST запроса необходимо передать токен, полученный при успешном login в систему

Отправка сообщений:
> Note: Для отправки сообщения в теле запроса JSON формате необходимо передать имя пользователя и текст сообщения. Поля JSON: name - Имя пользователя, message - текст сообщения

```sh
curl --location --request POST 'http://localhost:5000/user/send' \
--header 'Authorization: Bearer_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NjIyODYxOTJ9.3vfZ_4lVcC37Z2un8ptScN0m47aHg1y4s0MJW7pI-0E' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "user1",
    "message": "ТЕКСТ СООБЩЕНИЯ" 
}
```
Получение истории сообщений:
> Note: Для получения истории сообщений в теле запроса JSON формате необходимо передать имя пользователя и в сообщении "history 10" (где 10 - количество последних сообщений). Поля JSON: name - Имя пользователя, message - history <количество сообщений>

```sh
curl --location --request POST 'http://localhost:5000/user/send' \
--header 'Authorization: Bearer_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NjIyODYxOTJ9.3vfZ_4lVcC37Z2un8ptScN0m47aHg1y4s0MJW7pI-0E' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "user1",
    "message": "history 10" 
}'
```

## Редактирование базы данных

Для редактирования базы данных в контейнер добавлен образ редактора баз данных "adminer".
Доступен по адресу http://localhost:8080/

## Контактный данные

Задачу выполнил Константинов А.В.  ([Andruxakonst@yandex.ru](Andruxakonst@yandex.ru))