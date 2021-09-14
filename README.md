##  Содержание
<!-- GEN:toc -->
- [Установка](#install)
- [Запуск](#start)
- [Описание](#description)
    * [Страницы](#pages)
    * [Пользователи](#users)
<!-- GEN:stop -->

## <a name='install'></a> Установка

```bash
$ npm install
```

## <a name='start'></a> Запуск
```bash
$ npm run start:api
$ npm run start
```
По умолчанию сервер запустится на `3001` порту. React-клиент на `3000`

> **Примечание:** Переменные окружения задаются в файле `package.json`.

## <a name='description'></a> Описание
Аутентификация и Авторизация реализованы с помощью [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

### <a name='pages'></a> Страницы
- [/](http://localhost:3000/) - общедоступная страница **About**
- [/auth/signin](http://localhost:3000/auth/signin) - экран входа в систему **Login**
- [/home](http://localhost:3000/home) - защищенная страница **Home**
- [/admin](http://localhost:3000/admin) - видна только администратору **Admin**

### <a name='users'></a> Пользователи
В системе всего два пользователя:

- `admin` - иметь доступ ко всем страницам
```json
{
    "email": "admin@app.com",
    "password": "admin",
    "role": "admin"
}
```
- `guest` - имеет доступ к страницам `About`, `Login`, `Home`
 ```json
{
    "email": "guest@app.com",
    "password": "guest",
    "role": "guest"
}
```
Анонимный пользователь имеет доступ к странице `About`