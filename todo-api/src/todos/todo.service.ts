import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
    ) {}

    async create(todoData: CreateTodoDto, userId: number): Promise<Todo> {
        const todo = this.todoRepository.create({ ...todoData, user: { id: userId } });
        return this.todoRepository.save(todo);
    }

    async findAll(page: number, limit: number): Promise<Todo[]> {
        return this.todoRepository.find({
            skip: (page - 1) * limit,
            take: limit,
        });
    }
}
