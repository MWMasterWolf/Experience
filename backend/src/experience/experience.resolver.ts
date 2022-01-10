import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExperienceType } from './dto/experienceType.dto';
import { ExperienceService } from './experience.service';
import { experienceInput } from './experience.input';

@Resolver(of => ExperienceType)
export class ExperienceResolver {

  constructor(private experienceService: ExperienceService) { }

  @Query(returns => [ExperienceType])
  async experiences(): Promise<ExperienceType[]> {
    return this.experienceService.getExperiences();
  }

  @Query(returns => ExperienceType)
  async experience(@Args('id', { type: () => String }) id: string): Promise<ExperienceType> {
    return this.experienceService.getExperience(id);
  }

  @Mutation(returns => ExperienceType)
  async createExperience(@Args('input') input: experienceInput): Promise<ExperienceType> {
    return this.experienceService.createExperience(input);
  }

  @Mutation(returns => ExperienceType)
  async updateExperience(@Args('id') id: string, @Args('input') input: experienceInput): Promise<ExperienceType> {
    return this.experienceService.updateExperience(id, input);
  }

  @Mutation(returns => ExperienceType)
  async deleteExperience(@Args('id') id: string): Promise<ExperienceType> {
    return this.experienceService.deleteExperience(id);
  }
}
