import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../../shared/utils/storage/session-storage.service';
import { ILoginHash } from '../../features/login/models/interfaces/login-hash/ilogin-hash';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class MarvelUrlInterceptor implements HttpInterceptor {
  private sessionStorage = inject(SessionStorageService)

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const hash = this.sessionStorage.getItem<string>('hash');
    const loginParams = this.sessionStorage.getItem<ILoginHash>('loginHashObject');
    const acceptedReq = req.url.includes(environment.baseUrl)

    if (hash && loginParams && acceptedReq) {
      const modifiedReq = req.clone({
        params: req.params.append('ts', loginParams.timestamp).append('apikey', loginParams.publicKey).append('hash', hash),
      });
      return next.handle(modifiedReq);
    } else return next.handle(req);
  }
}
