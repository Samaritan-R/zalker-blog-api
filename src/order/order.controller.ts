import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFiles, HttpException, HttpStatus, UseFilters, BadRequestException } from '@nestjs/common';
import { OrderService } from './order.service';
import { LoggerPipe } from 'src/logger/logger.pipe';
import { FilesInterceptor } from '@nestjs/platform-express';
import TestFilter from 'src/logger/test.filter';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Get(':id')
  create(@Param('id', LoggerPipe) id: string) {
    return this.orderService.getOrderList(id);
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body) {
    console.log(files, body)
    return {
      code: 200,
      msg: '上传成功',
    }

  }

  @Get(':id/test')
  @UseFilters(new TestFilter())
  getSystemErrorMap() {
    throw new BadRequestException('Forbidden');
  }
}