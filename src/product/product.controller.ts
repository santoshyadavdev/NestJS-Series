import { Controller, Get, Post, Req, Put, Delete, Patch, Res, HttpCode, Header, Param } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('product')
export class ProductController {

    products = [
        { id: 1, name: 'One Plus 7', price: 48000 },
        { id: 2, name: 'I Phone X', price: 64999 }
    ];

    @Get()
    GetProducts() {
        return this.products;
    }

    @Post()
    AddProduct(@Req() req: Request, @Res() res: Response) {
        this.products.push(req.body);
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
    GetProductById(@Param() id: number) {
        return this.products.find(p => p.id === id);
    }

}
