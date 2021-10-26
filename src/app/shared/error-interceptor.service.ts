import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService  implements HttpInterceptor {
  constructor(public router: Router, private toastr: ToastrService) {
  }
 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
 
    return next.handle(req).pipe(
      catchError((error) => {
        console.log(error)

        if(error.error) {
          this.toastr.error("Error", error.error.message, {
            timeOut: 0,
            extendedTimeOut: 0
          })
        }
        
       
        return throwError(error.error);
      })
    )
  }
}