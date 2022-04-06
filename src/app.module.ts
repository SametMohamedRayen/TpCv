import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './cvs/entities/user.entity';
import { CvEntity } from './cvs/entities/cv.entity';
import { SkillEntity } from './cvs/entities/skill.entity';
import { CvsModule } from './cvs/cvs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost' /*process.env.DB_HOST*/,
      port: 3306,
      username: 'root' /*process.env.DB_USER*/,
      password: 'mysqlroot' /*process.env.DB_PASSWORD*/,
      database: 'gestionnaire_cvs' /*process.env.DB_NAME*/,
      entities: [UserEntity, SkillEntity, CvEntity],
      synchronize: true,
    }),
    CvsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
