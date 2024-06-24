import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { RequestService } from './request.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventModel } from './event-list/events';

const EVENT_URL = 'api/events';

@Injectable()
export class EventService {

  constructor(private requestService: RequestService,
  private http: HttpClient) { }

  getEvents(): Observable<EventModel[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.requestService.get<EventModel[]>(EVENT_URL, httpOptions);
  }

  getEvent(eventId): Observable<EventModel>{
    return this.requestService.get<EventModel>(`${EVENT_URL}/${eventId}`);
  }

  createEvent(event: EventModel): Observable<any> {
    return this.requestService.post<EventModel>(`${EVENT_URL}/`, event);
  }

  updateEvent(event: EventModel): Observable<EventModel> {
    return this.requestService.put<EventModel>(`${EVENT_URL}/`, event);
  }

  deleteEvent(eventId: number): Observable<EventModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = `${EVENT_URL}/${eventId}`;
    return this.requestService.delete<EventModel>(url, httpOptions);
  }

  eventNameExists(name: string): Observable<boolean> {
    return this.getEvents().pipe(
      map(events => {
        return events.findIndex(event => event.name === name) !== -1;
      })
    );
  }

}