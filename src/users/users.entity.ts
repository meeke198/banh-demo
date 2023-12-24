/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Base } from '../common/base.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Role } from '../roles/roles.entity';
import { Photo } from '../photos/photo.entity';
import { Cart } from '../carts/carts.entity';

@Entity()
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];

  @OneToMany(() => Role, (roles) => roles.id)
  roles: Role[];

  @OneToOne(() => Cart)
  @JoinColumn()
  cart: Cart;
}
// (type) => Role to explicitly indicate the type of the target entity.
// Role entity that represents the relationship with the User entity. In this case, it uses roles.id to indicate that the Role entity has a property named id that establishes the relationship.