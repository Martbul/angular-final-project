import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import {environment} from "./enviroments/enviroments"
const apiUrl = environment.apiUrl
@Injectable()
export class AppInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       if(req.url.startsWith("/api")){
        req = req.clone({url:req.url.replace('/api', apiUrl)})
       }
       
       
        return next.handle(req);
    }
}
    

export const appInterceptorProvider:Provider={
    provide:HTTP_INTERCEPTORS,
    useClass:AppInterceptor,
    multi:true
}