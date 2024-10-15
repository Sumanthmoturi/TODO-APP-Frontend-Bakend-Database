import { Controller, Post, Get, Body, Query, Req } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto, @Req() request: any) {
        const userId = request.user.id; // Assume user ID is set in request after authentication
        return this.todoService.create(createTodoDto, userId);
    }

    @Get()
    async findAll(@Query('page') page: number, @Query('limit') limit: number) {
        return this.todoService.findAll(page, limit);
    }
}
