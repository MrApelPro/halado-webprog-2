import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Observable, switchMap } from 'rxjs';
import { DividerModule } from 'primeng/divider';
import { EventItemComponent } from './event-item.component';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
    standalone: true,
    imports: [ButtonModule, RouterLink, EventItemComponent, DividerModule]
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService) { }

  events$: Observable<any>;
  events;

  ngOnInit() {
    this.events$ = this.eventService.getEvents();
    this.events$.subscribe(result => {
      this.events = result;
    });
  }

  onDeleteEvent(eventId: number): void {
    this.eventService.deleteEvent(eventId)
    .pipe(
      switchMap(res => this.eventService.getEvents())
    )
    .subscribe(result => this.events = result);
  }

}