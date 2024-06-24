import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventModel } from './events';
import { MessageService, SharedModule } from 'primeng/api';
import { EventSocialComponent } from '../event-social/event-social.component';
import { TagModule } from 'primeng/tag';
import { NgIf, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { HighlightDirective } from '../directives/highlight.directive';
import { ChipModule } from 'primeng/chip';
import { FirstLetterPipe } from '../pipes/first-letter.pipe';

@Component({
    selector: 'app-event-item',
    template: `
        <p-toast></p-toast>
        <p-card>
          <ng-template pTemplate="header">
            <p-chip styleClass="pl-0 pr-3">
                <span class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">{{event.name | mFirstLetter}}</span>
            </p-chip>
            <p-button icon="pi pi-calendar" [title]="event.name + ' details'" [routerLink]="['/events', event.id]" label="{{event.name}}" [link]="true"></p-button>
          </ng-template>
          <p *ngIf="event.description" appHighlight [highlightColor]="'magenta'" class="m-0 pb-2">
              {{event.description}}
          </p>
          <p-tag severity="info" value="{{event.start  | date:'yyyy-MM-dd HH:mm'}}"></p-tag>
          <ng-template pTemplate="footer">
            <app-event-social [event]="event" (notify)="onNotify($event)" (evt)="onEvt($event)"></app-event-social>
            <p-button class="ml-2" icon="pi pi-times" [rounded]="true" [text]="true" severity="danger" (click)="onDelete()"></p-button>
          </ng-template>
        </p-card>
  `,
    styles: [':host {padding-bottom: 1rem;}'],
    providers: [MessageService],
    standalone: true,
    imports: [ToastModule, CardModule, SharedModule, ButtonModule, RouterLink, NgIf, TagModule, EventSocialComponent, DatePipe, FirstLetterPipe, ChipModule, HighlightDirective]
})
export class EventItemComponent {
  @Input('event') event: EventModel;
  @Output() delete = new EventEmitter<number>();

  constructor(private messageService: MessageService) {}

  onNotify(event): void {
    event.likes++;
    this.messageService.add({ severity: 'info', summary: 'Event liked!', detail: 'Likes: ' + event.likes }); 
  }

  onDelete(): void {
    this.delete.emit(this.event.id);
  }
}