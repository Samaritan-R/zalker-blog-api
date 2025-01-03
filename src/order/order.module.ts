import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { TestMiddleware } from 'src/my-mid/test.middleware';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './upload',
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          return cb(null, filename);
        }
      })
    }),
    UserModule,
  ],
})
export class OrderModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TestMiddleware).forRoutes('*');
  }
}
