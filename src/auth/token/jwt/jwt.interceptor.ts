import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

import { DelonAuthConfig } from '../../auth.config';
import { BaseInterceptor } from '../base.interceptor';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';

@Injectable()
export class JWTInterceptor extends BaseInterceptor {
  isAuth(options: DelonAuthConfig): boolean {
    this.model = this.injector
      .get(DA_SERVICE_TOKEN)
      .get<JWTTokenModel>(JWTTokenModel);
    return (
      this.model &&
      this.model.token &&
      !this.model.isExpired(options.token_exp_offset)
    );
  }

  setReq(req: HttpRequest<any>, options: DelonAuthConfig): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.model.token}`,
      },
    });
  }
}
