import { Controller, Get, Post, Req, Put, Delete, Patch, Res, HttpCode, Header, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Get()
    GetProducts() {
        return this.productService.getProducts();
    }

    @Post()
    AddProduct(@Req() req: Request, @Res() res: Response) {
        this.productService.addProduct(req.body);
        // return json data with default status code
        return res.json({ id: req.body.id });
        // to update the status code
        //return res.status(205).json({ id: req.body.id})
    }

    @Put()
    @HttpCode(204)
    EditProduct() {

    }

    @Delete()
    @Header('header-key', 'value')
    DeleteProduct() {

    }

    @Patch()
    UpdateProductPrice() {

    }

    @Get(':id')
    GetProductById(@Param() param: any) {
        console.log(param.id);
        return this.productService.getProductById(+param.id);
    }

}
