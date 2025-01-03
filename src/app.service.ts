import { Get, Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(id: string) {
    return {
      id,
      name: 'flash'
    };
  }
}

