import { Module } from '@nestjs/common';
import { ProductsControler } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsControler],
  providers: [ProductsService],
  exports: [TypeOrmModule],
})
export class ProductsModule {}
