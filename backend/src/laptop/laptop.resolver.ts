import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LaptopType } from './dto/laptop.dto';
import { LaptopInput } from './laptop.input';
import { LaptopService } from './laptop.service';
import { Laptop } from './interfaces/laptop.interface';

@Resolver(of => LaptopType)
export class LaptopResolver {
  constructor(private readonly laptopService: LaptopService) { }

  @Query(returns => [LaptopType])
  async laptops(): Promise<LaptopType[]> {
    return this.laptopService.getLaptops();
  }

  @Query(returns => LaptopType)
  async laptop(@Args('id') id: string): Promise<LaptopType> {
    return this.laptopService.getLaptop(id);
  }

  @Mutation(returns => LaptopType)
  async createLaptop(@Args('input') input: LaptopInput): Promise<LaptopType> {
    return this.laptopService.createLaptop(input);
  }

  @Mutation(returns => LaptopType)
  async updateLaptop(
    @Args('id') id: string,
    @Args('input') input: LaptopInput
  ){
    return this.laptopService.updateLaptop(id, input as Laptop);
  }

  @Mutation(returns => LaptopType)
  async deleteLaptop(@Args('id') id: string) {
    return this.laptopService.deleteLaptop(id);
  }
}
