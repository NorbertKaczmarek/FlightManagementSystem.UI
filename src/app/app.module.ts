import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FlightComponent } from './flight/flight.component';
import { FlightEditComponent } from './flight/flight-edit/flight-edit.component';
import { FlightStartComponent } from './flight/flight-start/flight-start.component';
import { FlightListComponent } from './flight/flight-list/flight-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FlightDetailComponent } from './flight/flight-detail/flight-detail.component';
import { FlightItemComponent } from './flight/flight-list/flight-item/flight-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './auth/auth.interceptor.service';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AccountComponent } from './auth/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlightComponent,
    FlightEditComponent,
    FlightStartComponent,
    FlightListComponent,
    HomeComponent,
    FlightDetailComponent,
    FlightItemComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
