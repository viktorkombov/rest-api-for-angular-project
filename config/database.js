const mongoose = require('mongoose');
const dbString = require('./index').dbUrl;
const rdyString = `${'*'.repeat(15)} Database is ready ${'*'.repeat(5)}`;

module.exports = () => {
    return mongoose.connect(dbString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    console.log(rdyString))
};