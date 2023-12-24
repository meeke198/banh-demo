/* eslint-disable prettier/prettier */
import { Entity, Column, ManyToOne, PrimaryColumn} from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class Role {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
  // eslint-disable-next-line
  @ManyToOne(type  => User, user => user.roles)
  user: User;

}