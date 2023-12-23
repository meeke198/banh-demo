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
@Controller('products')
export class ProductsControler {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  createProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ): any {
    const newProduct = this.productsService.addProduct(
      productTitle,
      productDescription,
      productPrice,
    );
    return newProduct;
  }
  @Get()
  getProducts() {
    return this.productsService.getAllProducts();
  }
  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.findSinggleProduct(prodId);
  }
  @Patch(':id')
  updateProduct(
    @Body('id') productId: string,
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
  removeProduct(@Param('id') prodId: string) {
    return this.productsService.deleteProduct(prodId);
  }
}
