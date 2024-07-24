import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { SpinnerService } from "../services/spinner.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private spinnerService = inject(SpinnerService)

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const acceptedReq = req.url.includes(environment.baseUrl)

    if (req.headers.get('X-LOADING') === 'false' && acceptedReq) return next.handle(req);
    this.spinnerService.showLoader();
    return next.handle(req).pipe(finalize(() => this.spinnerService.hideLoader()))
  }
}