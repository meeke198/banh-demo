import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { DataSource } from 'typeorm';
import { Product } from './products/products.entity';

@Module({
  // The forRoot() method supports all the configuration properties exposed by the DataSource constructor from the TypeORM package.
  // Once this is done, the TypeORM DataSource and EntityManager objects will be available to inject across the entire project (without needing to import any modules)
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'banh-demo',
      entities: [Product],
      synchronize: true,
      autoLoadEntities: true,
      // extra: {
      //   createDatabaseIfNotExist: true,
      // },
    }),

    ProductsModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
// At the root level of NestJS, you have the AppModule . This is the module where you need to register all modules that you want to use in your app.
