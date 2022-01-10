import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { ExperienceType } from './dto/experienceType.dto';
import { ExperienceService } from './experience.service';

@Controller('experience')
export class ExperienceController {

  constructor(private experienceService: ExperienceService) {}
  
  @Get()
  async experiencies(@Res() res) {
    const experiences = await this.experienceService.getExperiences();
    return res.status(HttpStatus.OK).json({
      message: 'Successfully retrieved the experiences',
      data: experiences
    });
  }

  @Get('/:id')
  async experience(@Res() res, @Param('id') id: string) {
    const experience = await this.experienceService.getExperience(id);
    if (!experience) throw new NotFoundException('The experience you are looking for does not exits');
    return res.status(HttpStatus.OK).json({
      message: 'Successfully retrieved the experience',
      data: experience
    });
  }

  @Post('/create')
  async create(@Res() res, @Body() experienceType: ExperienceType) {
    const experience = await this.experienceService.createExperience(experienceType);
    return res.status(HttpStatus.OK).json({
      message: 'Successfully created the experience',
      data: experience
    });
  }

  @Put('/update/:id')
  async update(@Res() res, @Param('id') id: string, @Body() experienceType: ExperienceType) {
    const experience = await this.experienceService.updateExperience(id, experienceType);
    if (!experience) throw new NotFoundException('The experience you are looking for does not exits');
    return res.status(HttpStatus.OK).json({
      message: 'Successfully updated the experience',
      data: experience
    });
  }

  @Delete('/delete/:id')
  async delete(@Res() res, @Param('id') id: string) {
    const experience = await this.experienceService.deleteExperience(id);
    if (!experience) throw new NotFoundException('The experience you are looking for does not exits');
    return res.status(HttpStatus.OK).json({
      message: 'Successfully deleted the experience',
      data: experience
    });
  }
}
