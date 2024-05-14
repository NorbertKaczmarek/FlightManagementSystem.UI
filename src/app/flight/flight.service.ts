import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Flight } from './flight.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
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
    return this.http
      .post<any>(`${environment.apiUrl}/${this.url}/${id}`, flight)
      .pipe(catchError(this.handleError));
  }

  public createFlight(flight: Flight): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/${this.url}`, flight, {
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
  }

  public deleteFlight(flight: Flight): Observable<Flight[]> {
    return this.http
      .delete<any>(`${environment.apiUrl}/${this.url}/${flight.id}`)
      .pipe(catchError(this.handleError));
  }

  public notify = new BehaviorSubject<any>('');

  notifyObservable$ = this.notify.asObservable();

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.status) {
      return throwError(() => new Error(errorMessage));
    }

    switch (errorRes.status) {
      case 401:
        errorMessage = 'You must be logged in to do it.';
    }

    return throwError(() => new Error(errorMessage));
  }
}
