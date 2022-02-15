import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'test_user',
        password: 'test_password',
        database: 'test',
        entities: [User],
      })}),
      TypeOrmModule.forFeature([User])    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
