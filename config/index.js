const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbUrl: 'mongodb://localhost:27017/',
        cookie: 'cookie-for-auth-token',
        secret: 'SecretService',
        saltRounds: 11
    }
}

module.exports = config[env];