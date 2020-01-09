import { Module, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingLibModule } from '@app/shopping-lib'
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { PRODUCT, Product_Token } from './product/product.token';
import { ClientService } from './client/client.service';
import { dbConnectionFactory } from './connection.provider';
import { TransientdemoService } from './transientdemo/transientdemo.service';
import { RequestdemoService } from './requestdemo/requestdemo.service';

@Module({
  imports: [ShoppingLibModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, dbConnectionFactory,
   {
     provide : PRODUCT,
     useValue: Product_Token,
     scope : Scope.REQUEST
   },
   ClientService,
   TransientdemoService,
   RequestdemoService],
})
export class AppModule { }
