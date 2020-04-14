import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
    //method, return an observable or promise or boolean
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{

    //cuando tratemos de irnos del router se ejecutara:
    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}