import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('link')
export class LinkEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'url' })
  url!: string;

  @Column({ name: 'description' })
  description!: string;

  @Column({ name: 'user_id' })
  userId: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.links)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
