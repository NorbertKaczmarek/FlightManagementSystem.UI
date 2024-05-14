import { Component } from '@angular/core';
import { FlightService } from './flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {

  constructor(private flightService: FlightService, private router: Router, private route: ActivatedRoute) {}

  initNewFlight() {
    // this.flightToEdit = new Flight();
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  // initNewTestFlight(){
  //   let flight = new Flight;
  //   flight.numerLotu = Math.floor(Math.random() * 100)
  //   flight.dataWylotu = "";
  //   flight.miejsceWylotu = "miejsce testowe 1" 
  //   flight.miejscePrzylotu = "miejsce testowe 2" 
  //   flight.typSamolotu = 0
  //   this.flightService
  //     .createFlight(flight)
  //     .subscribe(() => {
  //       this.flightService
  //         .getFlights()
  //         .subscribe((flights: Flight[]) => this.updateFlightList(flights));
  //     }); 
  // }
}
