import { Module } from '@nestjs/common';
import { LaptopService } from './laptop.service';
import { LaptopResolver } from './laptop.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { LaptopSchema } from './laptop.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Laptop', schema: LaptopSchema }])],
  providers: [LaptopService, LaptopResolver]
})
export class LaptopModule {}
