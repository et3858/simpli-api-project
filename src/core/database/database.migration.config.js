const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
    development: {
        dialect: process.env.DB_DIALECT,
        storage: process.env.DB_NAME_DEV,
    },
    test: {
        dialect: process.env.DB_DIALECT,
        storage: process.env.DB_NAME_TEST,
    },
    production: {
        dialect: process.env.DB_DIALECT,
        storage: process.env.DB_NAME_PROD,
    },
};

module.exports = dbConfig;
