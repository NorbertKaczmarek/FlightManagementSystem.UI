import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Flight } from './flight.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private url = 'flight';

  constructor(private http: HttpClient) {}

  public getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getFlightById(id: number): Observable<Flight> {
    return this.http.get<Flight>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  public updateFlight(flight: Flight): Observable<Flight[]> {
    return this.http.post<any>(
      `${environment.apiUrl}/${this.url}/${flight.id}`,
      flight
    );
  }

  public updateFlightWithId(id: number, flight: Flight): Observable<Flight[]> {
    return this.http.post<any>(
      `${environment.apiUrl}/${this.url}/${id}`,
      flight
    );
  }

  public createFlight(flight: Flight): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}/${this.url}`,
      flight, {
        observe: 'response',
      }
    );
  }

  public deleteFlight(flight: Flight): Observable<Flight[]> {
    return this.http.delete<any>(
      `${environment.apiUrl}/${this.url}/${flight.id}`
    );
  }

  public notify = new BehaviorSubject<any>('');

  notifyObservable$ = this.notify.asObservable();

  public notifyOther(data: any) {
    if (data) {
        this.notify.next(data);
    }
  }
}
