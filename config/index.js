const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbUrl: 'mongodb+srv://viktorkombov:Fo1k67cd45CqBahB@cluster0.3vnvm.mongodb.net/recipes?retryWrites=true&w=majority',
        cookie: 'cookie-for-auth-token',
        secret: 'SecretService',
        origin: ['http://localhost:4200', 'http://localhost:5555']
    },
    production: {
        port: process.env.PORT || 3000,
        dbUrl: 'mongodb+srv://viktorkombov:Fo1k67cd45CqBahB@cluster0.3vnvm.mongodb.net/recipes?retryWrites=true&w=majority',
        origin: ['https://your-recipes-spa.herokuapp.com', 'https://your-recipes-spa.herokuapp.com/'],
        cookie: 'cookie-for-auth-token',
        secret: 'SecretService'
    }
}

module.exports = config[env];