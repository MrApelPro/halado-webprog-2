import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventService } from '../event.service';
import { EventModel } from '../event-list/events';
import { TagModule } from 'primeng/tag';
import { NgIf, DatePipe } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { switchMap } from 'rxjs';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrl: './event-details.component.scss',
    standalone: true,
    imports: [CardModule, SharedModule, BadgeModule, NgIf, TagModule, RouterLink, DatePipe]
})
export class EventDetailsComponent implements OnInit {

  events = [];
  event: EventModel;

  constructor(private route: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => 
      this.eventService.getEvent(+params.get('eventId')))
    ).subscribe(event => {
        this.event = event;
    });
  }

}
