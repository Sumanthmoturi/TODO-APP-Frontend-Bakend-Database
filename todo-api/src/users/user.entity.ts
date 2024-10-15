import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Todo } from '../entities/todo.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    mobile: string;

    @Column()
    password: string;

    @Column({ unique: true })
    email: string;

    @OneToMany(() => Todo, (todo) => todo.user)
    todos: Todo[];
}
