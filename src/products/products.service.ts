import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  private products: Product[] = [];

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Product | null> {
    return this.productsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }

  addProduct(product: Product): Product {
    // const productId = Math.random().toString();
    const newProduct = new Product();
    newProduct.name = product.name;
    newProduct.inventory = product.inventory;
    newProduct.description = product.description;
    newProduct.categoryId = product.categoryId;
    newProduct.price = product.price;
    this.products.push(newProduct);
    return { ...newProduct }; // Return a copy of the new product
  }

  getAllProducts(): Product[] {
    return [...this.products]; // Return a copy of the products array
  }

  findSingleProduct(productId: number): Product {
    const product = this.products.find((prod) => prod.id === productId);
    if (!product) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }
    return { ...product }; // Return a copy of the found product
  }

  updateProduct(
    prodId: number,
    name: string,
    description: string,
    price: number,
  ): Product {
    const [product, index] = this.findProductById(prodId);
    const updatedProduct: Product = { ...product };

    if (name) {
      updatedProduct.name = name;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }

    this.products[index] = updatedProduct;
    return { ...updatedProduct }; // Return a copy of the updated product
  }

  // deleteProduct(prodId: number): string {
  //   const [product, index] = this.findProductById(prodId);
  //   this.products.splice(index, 1);
  //   return `Product with ID ${product.id} was deleted`;
  // }

  private findProductById(id: number): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return [product, productIndex];
  }
}
