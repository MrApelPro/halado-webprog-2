import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventModel } from '../event-list/events';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-event-social',
    templateUrl: './event-social.component.html',
    styleUrl: './event-social.component.scss',
    standalone: true,
    imports: [ButtonModule],
})
export class EventSocialComponent {
  @Input() event: EventModel;
  @Output() notify = new EventEmitter<EventModel>();
  @Output('evt') eventOutput = new EventEmitter<string>();

  like() {
    this.notify.emit(this.event);
    this.eventOutput.emit('output event!');
  }
}
