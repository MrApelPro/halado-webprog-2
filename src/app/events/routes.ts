import { Route } from "@angular/router";
import { EventDetailsComponent } from "../event-details/event-details.component";
import { EventListComponent } from "../event-list/event-list.component";
import { EventCreateComponent } from "../event-create/event-create.component";
import { canDeactivateGuard, matchAuthGuardFunction } from "../auth/auth.guard";

export const EVENT_ROUTES: Route[] = [
  { path: '', component: EventListComponent, canMatch: [matchAuthGuardFunction] },
  { path: 'create', component: EventCreateComponent, 
  canMatch: [matchAuthGuardFunction], canDeactivate: [canDeactivateGuard] },
  { path: ':eventId', component: EventDetailsComponent, canMatch: [matchAuthGuardFunction] }
];