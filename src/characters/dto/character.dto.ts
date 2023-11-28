import { IsNotEmpty, IsString } from 'class-validator';

export class CharacterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  serieOrMovie: string;

  @IsString()
  @IsNotEmpty()
  characteristic: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsString()
  @IsNotEmpty()
  typeOfPower: string;
}
