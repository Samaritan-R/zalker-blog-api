import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, Request, NextFunction } from "express";
import { UserService } from "src/user/user.service";

@Injectable()
export class TestMiddleware implements NestMiddleware {
    constructor(private userService: UserService) { }
    use(req: Request, res: Response, next: NextFunction) {
        let a = this.userService.getUserName()
        console.log('Requesting...')
        console.log(a)
        next()
    }

}