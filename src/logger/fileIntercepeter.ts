export class FileIntercepeter {
    intercept(context, next) {
        console.log('FileIntercepeter');
        return next.handle();
    }
}