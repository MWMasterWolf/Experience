import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';
import { ExperienceSchema } from './schema/experience.schema';
import { ExperienceResolver } from './experience.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Experience',
        schema: ExperienceSchema
      }
    ])
  ],
  controllers: [ExperienceController],
  providers: [ExperienceService, ExperienceResolver],
})
export class ExperienceModule {}
