import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {

  getOrderList(id) {
    return {
      name: id,
      age: 18
    }
  }
}
