import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  product_name: string;

  @Column({ nullable: true })
  category_id: number;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false, length: 300 })
  description: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: true })
  discount: number;

  @Column({ nullable: false, length: 300 })
  photo: string;

  @Column({ type: 'datetime', nullable: false })
  created_at: Date;

  @Column({ type: 'datetime', nullable: false })
  updated_at: Date;
}
