import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Laptop } from './interfaces/laptop.interface';
import { LaptopInput } from './laptop.input';
import { LaptopType } from './dto/laptop.dto';

@Injectable()
export class LaptopService {
  constructor(@InjectModel('Laptop') private laptopModel: Model<Laptop>) {}

  async getLaptops(): Promise<LaptopType[]> {
    return await this.laptopModel.find().exec();
  }
  
  async getLaptop(id: string): Promise<LaptopType> {
    return await this.laptopModel.findById(id);
  }
  
  async createLaptop(createLaptopDto: LaptopInput): Promise<LaptopType> {
    const createdLaptop = new this.laptopModel(createLaptopDto);
    return await createdLaptop.save();
  }

  async updateLaptop(id: string, laptop: Laptop): Promise<LaptopType> {
    return await this.laptopModel.findByIdAndUpdate(id, laptop, { new: true });
  }

  async deleteLaptop(id: string): Promise<LaptopType> {
    return await this.laptopModel.findByIdAndRemove(id);
  }

}
