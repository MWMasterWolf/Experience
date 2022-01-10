import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Experience } from './interfaces/experience.interface';
import { ExperienceType } from './dto/experienceType.dto';

@Injectable()
export class ExperienceService {

  constructor(@InjectModel('Experience') private readonly experienceModel: Model<Experience>) { }

  async getExperiences(): Promise<Experience[]> {
    const experiences = await this.experienceModel.find();
    return experiences;
  }

  async getExperience(id: string): Promise<Experience> {
    const experience = await this.experienceModel.findById(id);
    return experience;
  }

  async createExperience(experienceType: ExperienceType): Promise<Experience> {
    const experience = new this.experienceModel(experienceType);
    return await experience.save();
  }

  async updateExperience(id: string, experienceType: ExperienceType): Promise<Experience> {
    const experience = await this.experienceModel.findByIdAndUpdate(id, experienceType, { new: true });
    return experience;
  }

  async deleteExperience(id: string): Promise<Experience> {
    const experience = await this.experienceModel.findByIdAndDelete(id);
    return experience;
  }
}
