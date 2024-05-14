import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, ResolveFn, RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { FlightEditComponent } from './flight/flight-edit/flight-edit.component';
import { FlightStartComponent } from './flight/flight-start/flight-start.component';
import { HomeComponent } from './home/home.component';
import { FlightDetailComponent } from './flight/flight-detail/flight-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AccountComponent } from './auth/account/account.component';

const appRoutes: Routes = [
  // {
  //   path: "",
  //   component: HomeComponent, 
  //   pathMatch: 'full' 
  // },
  { path: '', redirectTo: '/flight', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'flight',
    loadChildren: () =>
      import('./flight/flight.module').then((m) => m.FlightModule),
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
