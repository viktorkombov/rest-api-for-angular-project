const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const { authMiddleware } = require('../utils');

module.exports = (express, app) => {
    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(cookieParser());

    app.use(authMiddleware);
}