import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { FlightEditComponent } from './flight/flight-edit/flight-edit.component';
import { FlightStartComponent } from './flight/flight-start/flight-start.component';
import { HomeComponent } from './home/home.component';
import { FlightDetailComponent } from './flight/flight-detail/flight-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AccountComponent } from './auth/account/account.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

const appRoutes: Routes = [
  // {
  //   path: "",
  //   component: HomeComponent, 
  //   pathMatch: 'full' 
  // },
  { path: '', redirectTo: '/flight', pathMatch: 'full' },
  {
    path: 'flight',
    title: 'flight',
    component: FlightComponent,
    children: [
      { path: '', component: FlightStartComponent },
      { path: 'new', component: FlightEditComponent },
      {
        path: ':id',
        title: resolvedChildATitle,
        component: FlightDetailComponent,
        // resolve: [FlightsResolverService],
      },
      {
        path: ':id/edit',
        component: FlightEditComponent,
        // resolve: [FlightsResolverService],
      },
    ]
  },
  {
    path: "login",
    title: "Login",
    component: LoginComponent
  },
  {
    path: "signup",
    title: "Signup",
    component: SignupComponent
  },
  {
    path: "account",
    title: "Account",
    component: AccountComponent
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
