import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTodoDto {
    @IsNotEmpty()
    @IsString()
    status: string;
}
