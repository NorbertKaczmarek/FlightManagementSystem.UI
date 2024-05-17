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
  isLoading = false;

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchData();

    this.flightService.notifyObservable$.subscribe((res) => {
      if (res.refresh) {
        // get your grid data again. Grid will refresh automatically
        this.fetchData();
      }
    });
  }

  fetchData() {
    this.flightService
      .getFlights()
      .subscribe((result: Flight[]) => {
        this.flights = result;
        this.isLoading = false;
      });
  }
}
