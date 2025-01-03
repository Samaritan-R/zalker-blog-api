import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})

export class UserModule {
}
