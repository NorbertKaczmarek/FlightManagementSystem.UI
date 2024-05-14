import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.css',
})
export class FlightListComponent implements OnInit {
  @Input() flights: Flight[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.fetchData();

    this.flightService.notifyObservable$.subscribe((res) => {
      if (res.refresh) {
        // get your grid data again. Grid will refresh automatically
        this.fetchData();
        console.log("notifyObservable")
      }
    });
  }

  fetchData() {
    this.flightService
      .getFlights()
      .subscribe((result: Flight[]) => (this.flights = result));
  }
}
