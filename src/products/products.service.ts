import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  addProduct(title: string, description: string, price: number): Product {
    const productId = Math.random().toString();
    const newProduct = new Product(productId, title, description, price);
    this.products.push(newProduct);
    return { ...newProduct }; // Return a copy of the new product
  }

  getAllProducts(): Product[] {
    return [...this.products]; // Return a copy of the products array
  }

  findSingleProduct(productId: string): Product {
    const product = this.products.find((prod) => prod.id === productId);
    if (!product) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }
    return { ...product }; // Return a copy of the found product
  }

  updateProduct(
    prodId: string,
    title: string,
    description: string,
    price: number,
  ): Product {
    const [product, index] = this.findProductById(prodId);
    const updatedProduct: Product = { ...product };

    if (title) {
      updatedProduct.title = title;
    }
    if (description) {
      updatedProduct.desc = description;
    }
    if (price) {
      updatedProduct.price = price;
    }

    this.products[index] = updatedProduct;
    return { ...updatedProduct }; // Return a copy of the updated product
  }

  deleteProduct(prodId: string): string {
    const [product, index] = this.findProductById(prodId);
    this.products.splice(index, 1);
    return `Product with ID ${product.id} was deleted`;
  }

  private findProductById(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return [product, productIndex];
  }
}
