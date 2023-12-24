import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Photo } from '../photos/photo.entity';
@Entity('products')
export class Product {
  // constructor(name: string, quantity: number, description: string, categoryId: number, price: number) {
  //   this.name = name;
  //   this.quantity = quantity;
  //   this.description = description;
  //   this.categoryId = categoryId;
  //   this.price = price;
  // }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  categoryId: number;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false, length: 300 })
  description: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: true })
  discount: number;

  @OneToMany(() => Photo, (photo) => photo.product)
  photos: Photo[];

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
