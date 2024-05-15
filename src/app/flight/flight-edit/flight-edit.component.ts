import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Flight, PlaneType } from '../flight.model';
import { Observable, switchMap } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.css',
})
export class FlightEditComponent {
  id: number;
  flight?: Flight = null;
  editMode = false;
  flightForm: FormGroup;
  error: string = null;

  obs: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      if (this.editMode) {
        this.flightService
          .getFlightById(this.id)
          .subscribe((flight: Flight) => {
            this.flight = flight;
            this.titleService.setTitle(
              `${this.flight.numerLotu}: ${this.flight.miejsceWylotu} -> ${this.flight.miejscePrzylotu}`
            );
            this.initForm();
          });
      } else {
        this.titleService.setTitle(`New Flight`);
      }
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.flightService
        .updateFlightWithId(this.id, this.flightForm.value)
        .subscribe(
          () => {
            this.flightService.notifyOther({ refresh: true });
            this.onCancel();
          },
          (errorMessage: Error) => {
            this.error = errorMessage.message;
          }
        );
    } else {
      this.flightService.createFlight(this.flightForm.value).subscribe(
        (res: HttpResponse<any>) => {
          let createdIdString: string = res.headers.get('location');
          this.router.navigate([createdIdString]);
          this.flightService.notifyOther({ refresh: true });
        },
        (errorMessage: Error) => {
          this.error = errorMessage.message;
        }
      );
    }
  }

  refreshGridInAnotherComponent() {
    this.flightService.notifyOther({ refresh: true });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let numerLotu = null;
    let dataWylotu = '';
    let miejsceWylotu = '';
    let miejscePrzylotu = '';
    let typSamolotu = null;

    if (this.editMode) {
      this.fetchFlight();
      if (this.flight) {
        numerLotu = this.flight.numerLotu;
        dataWylotu = this.flight.dataWylotu;
        miejsceWylotu = this.flight.miejsceWylotu;
        miejscePrzylotu = this.flight.miejscePrzylotu;
        typSamolotu = this.flight.typSamolotu;
      }
    }

    this.flightForm = new FormGroup({
      numerLotu: new FormControl(numerLotu, Validators.required),
      dataWylotu: new FormControl(dataWylotu, Validators.required),
      miejsceWylotu: new FormControl(miejsceWylotu, Validators.required),
      miejscePrzylotu: new FormControl(miejscePrzylotu, Validators.required),
      typSamolotu: new FormControl(typSamolotu, Validators.required),
    });
  }

  fetchFlight() {
    this.flightService
      .getFlightById(this.id)
      .subscribe((flight: Flight) => (this.flight = flight));
  }

  onFeedTestData() {
    this.flightForm = new FormGroup({
      numerLotu: new FormControl(Math.floor(Math.random() * 100)),
      dataWylotu: new FormControl(
        new Date(
          2024,
          Math.floor(Math.random() * 12),
          Math.floor(Math.random() * 30),
          Math.floor(Math.random() * 24),
          Math.floor(Math.random() * 60),
          Math.floor(Math.random() * 60)
        ).toISOString()
      ),
      miejsceWylotu: new FormControl(
        'Miejsce wylotu ' + Math.floor(Math.random() * 100)
      ),
      miejscePrzylotu: new FormControl(
        'Miejsce przylotu ' + Math.floor(Math.random() * 100)
      ),
      typSamolotu: new FormControl(PlaneType[Math.floor(Math.random() * 3)]),
    });
  }
}
