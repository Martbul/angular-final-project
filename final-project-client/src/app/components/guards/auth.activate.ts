import { Injectable } from "@angular/core";
import { UserService } from "../user/user-auth.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take } from "rxjs";


@Injectable({
    providedIn: 'root',
})

export class AuthActivate implements CanActivate {
    
    constructor(private UserauthService: UserService, private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):any{
      
        return this.UserauthService.user$.pipe(
            take(1),
            map(user =>{
                  const loginRequired =route.data['loginRequired'];
        if(loginRequired ===undefined || !!user ===loginRequired){return true};
        const returnUrl = route.url.map(u=> u.path).join('/')
        return !!user ?
        this.router.createUrlTree(['/app-finder'],{queryParams: {returnUrl}}):
        this.router.createUrlTree(['/login'],{queryParams: {returnUrl}})
    
            })
        )
    }
}