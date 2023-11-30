import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
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
