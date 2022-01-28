import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExperienceModule } from './experience/experience.module';
import { LaptopModule } from './laptop/laptop.module';

@Module({
  imports: [
    ExperienceModule, 
    MongooseModule.forRoot('mongodb://database/laptops'),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    LaptopModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
