import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Flight } from '../flight.model';
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

  obs: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router,
    private titleService: Title
  ) {}

  // ngOnInit(): void {
  //   console.log(this.editMode)
  //   this.obs = this.route.paramMap
  //     .pipe(
  //       switchMap((params) => {
  //         console.log(params.get('id'))
  //         this.id = Number(params.get('id'));
  //         this.editMode = params.get('id') != null;
  //         return this.flightService.getFlightById(this.id);
  //       })
  //     );
  //   // this.obs.subscribe();
  //   if (this.editMode){
  //     this.obs.subscribe((flight: Flight) => {
  //       this.flight = flight;
  //       if (this.editMode) {
  //         this.titleService.setTitle(
  //           `${this.flight.numerLotu}: ${this.flight.miejsceWylotu} -> ${this.flight.miejscePrzylotu}`
  //         );
  //       } else {
  //         this.titleService.setTitle(`New Flight`);
  //       }
  //       this.initForm();
  //     });
  //   }else{
  //     this.obs.subscribe(() => this.initForm());
  //   }
  // }

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

  // ngOnInit(): void {
  //   this.route.paramMap
  //     .pipe(
  //       switchMap((params) => {
  //         this.id = Number(params.get('id'));
  //         this.editMode = params.get('id') != null;
  //         if (this.editMode) {
  //           return this.flightService.getFlightById(this.id);
  //         }
  //       })
  //     )
  //     .subscribe((flight: Flight) => {
  //       this.flight = flight;
  //       this.initForm();

  //       if (this.editMode) {
  //         this.titleService.setTitle(
  //           `${this.flight.numerLotu}: ${this.flight.miejsceWylotu} -> ${this.flight.miejscePrzylotu}`
  //         );
  //       } else {
  //         this.titleService.setTitle(`New Flight`);
  //       }
  //     });
  // }

  onSubmit() {
    if (this.editMode) {
      this.flightService
        .updateFlightWithId(this.id, this.flightForm.value)
        .subscribe(() => {
          // this.router.navigate(["../../"], {relativeTo: this.route})
          // console.log(this.router.url)
          // this.router.navigateByUrl(`${this.router.url}`)
          this.flightService.notifyOther({ refresh: true });
          this.onCancel();
        });
    } else {
      this.flightService
        .createFlight(this.flightForm.value)
        .subscribe((res: HttpResponse<any>) => {
          let createdIdString: string = res.headers.get('location');
          this.router.navigate([createdIdString]);
          this.flightService.notifyOther({ refresh: true });
        });
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
      dataWylotu: new FormControl(''),
      miejsceWylotu: new FormControl(
        'Miejsce wylotu ' + Math.floor(Math.random() * 100)
      ),
      miejscePrzylotu: new FormControl(
        'Miejsce przylotu ' + Math.floor(Math.random() * 100)
      ),
      typSamolotu: new FormControl(Math.floor(Math.random() * 3)),
    });
  }
}
