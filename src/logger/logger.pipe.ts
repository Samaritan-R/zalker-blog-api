import { Injectable, PipeTransform } from "@nestjs/common";

@Injectable()

export class LoggerPipe implements PipeTransform {
    transform(value: any, metadata: any) {
        console.log(value, metadata, 'pipe');
        return value + '1';
    }
}