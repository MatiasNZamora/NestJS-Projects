import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response} from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { Autorization } = req.headers;
    
    if(!Autorization){
      throw new HttpException( 'Unauthorized', HttpStatus.UNAUTHORIZED );
    }
    if(Autorization !== 'zxcv'){
      throw new HttpException( 'Forbidden', HttpStatus.FORBIDDEN );
    }

    next();
  }
}
