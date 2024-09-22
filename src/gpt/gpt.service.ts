import { Injectable } from '@nestjs/common';

import { orthographyCheckCase } from './use-cases';
import { OrthographyDto } from './dtos';

@Injectable()
export class GptService {
  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckCase({ prompt: orthographyDto.prompt });
  }
}
