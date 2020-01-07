import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingLibModule } from '@app/shopping-lib'
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { PRODUCT, Product_Token } from './product/product.token';
import { DbproviderService } from './dbprovider/dbprovider.service';
import { ClientService } from './client/client.service';
import { dbConnectionFactory } from './connection.provider';

@Module({
  imports: [ShoppingLibModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, dbConnectionFactory,
   {
     provide : PRODUCT,
     useValue: Product_Token
   },
   ClientService],
})
export class AppModule { }
