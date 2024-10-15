import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.todos)
    user: User;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ default: 'in progress' })
    status: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
