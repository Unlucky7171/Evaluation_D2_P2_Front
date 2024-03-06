import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(`${environment.apiUrl}/events`);
  }

  createEvent(eventData: any) {
    return this.http.post(`${environment.apiUrl}/events`, eventData);
  }

  updateEvent(eventId: string, eventData: any) {
    return this.http.put(`${environment.apiUrl}/events/${eventId}`, eventData);
  }

  deleteEvent(eventId: string) {
    return this.http.delete(`${environment.apiUrl}/events/${eventId}`);
  }
}
