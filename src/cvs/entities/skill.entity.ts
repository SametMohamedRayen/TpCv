import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SkillEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;
  @Column()
  designation: string;
}
