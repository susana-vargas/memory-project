import { Injectable } from '@nestjs/common';
import { V4 } from 'uuid';

export type Character = {
  id: string;
  name: string;
  serieOrMovie: string;
  characteristic: string;
  genre: string;
  typeOfPower: string;
};

@Injectable()
export class CharacterService {
  private characters = [];

  getAll(): Character[] {
    return this.characters;
  }

  create(
    name: string,
    serieOrMovie: string,
    characteristic: string,
    genre: string,
    typeOfPower: string,
  ): Promise<Character> {
    const character: Character = {
      id: V4(),
      name,
      serieOrMovie,
      characteristic,
      genre,
      typeOfPower,
    };
    this.characters.push(character);
    return Promise.resolve(character);
  }
}
