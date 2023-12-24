import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.entity';
@Controller('products')
export class ProductsControler {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  createProduct(@Body('product') product: Product): Product {
    const newProduct = this.productsService.addProduct(product);
    return newProduct;
  }
  @Get()
  getProducts() {
    return this.productsService.getAllProducts();
  }
  @Get(':id')
  getProduct(@Param('id') prodId: number) {
    return this.productsService.findSingleProduct(prodId);
  }
  @Patch(':id')
  updateProduct(
    @Body('id') productId: number,
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ): any {
    const updatedProduct = this.productsService.updateProduct(
      productId,
      productTitle,
      productDescription,
      productPrice,
    );
    return updatedProduct;
  }
  @Delete(':id')
  deleteProduct(@Param('id') prodId: number) {
    return this.productsService.remove(prodId);
  }
}
