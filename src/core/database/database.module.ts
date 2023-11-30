import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './database.config';


@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'sqlite',
            storage: databaseConfig.development.storage,
            autoLoadModels: true,
            synchronize: false,
        }),
    ],
})
export class DatabaseModule {}
