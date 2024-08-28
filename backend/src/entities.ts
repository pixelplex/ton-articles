import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryColumn({ type: 'int8' })
  tgUserId: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @Column({ default: 0 })
  clicks: number;
}
