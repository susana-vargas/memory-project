import { Body, Controller, Get, Post } from '@nestjs/common';
import { Character, CharacterService } from './character.service';
import { CharacterDto } from './dto/character.dto';

@Controller('characters')
export class CharacterController {
  constructor(private readonly CharacterService: CharacterService) {}

  @Get()
  getAll() {
    return this.CharacterService.getAll();
  }

  @Post()
  create(@Body() newCharacter: CharacterDto): Promise<Character> {
    return this.CharacterService.create(
      newCharacter.name,
      newCharacter.serieOrMovie,
      newCharacter.characteristic,
      newCharacter.genre,
      newCharacter.typeOfPower,
    );
  }
}
