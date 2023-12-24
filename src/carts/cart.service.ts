import { Injectable, NotFoundException } from '@nestjs/common';
import { Cart } from './carts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  async findAll() {
    return this.cartRepository.find();
  }

  async findOne(id: number): Promise<Cart | null> {
    return this.cartRepository.findOneBy({ id });
  }

  async create(createCart: Cart) {
    const cart = this.cartRepository.create(createCart);
    return this.cartRepository.save(cart);
  }
}
