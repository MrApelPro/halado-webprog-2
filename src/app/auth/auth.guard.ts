import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, CanMatchFn, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { AuthService } from "../auth.service";
import { EventCreateComponent } from "../event-create/event-create.component";

export const activateAuthGuardFunction: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
      return inject(AuthService).isAuthenticated();
  }

export const matchAuthGuardFunction: CanMatchFn = (
    route: Route, segments: UrlSegment[]) => {
      return inject(AuthService).isAuthenticated();
  }

  export const canDeactivateGuard: CanDeactivateFn<EventCreateComponent> = (component: EventCreateComponent) => {
  return !component?.eventForm?.dirty;
};