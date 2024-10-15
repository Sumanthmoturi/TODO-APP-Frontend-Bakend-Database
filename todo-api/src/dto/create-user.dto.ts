import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  mobile: string;

  @IsString()
  gender: string;

  @IsString()
  country: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
