import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'auth';
  token = new BehaviorSubject<string>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, fullName: string, password: string, confirmPassword: string) {
    return this.http.post<any>( 
      `${environment.apiUrl}/${this.url}/signup`,
      {
        email: email,
        fullName: fullName,
        password: password,
        confirmPassword: password, // to be fixed
      }
    );
    // .pipe(
    //   catchError(this.handleError),
    //   tap((resData) => {
    //     this.handleAuthentication(
    //       resData.email,
    //       resData.localId,
    //       resData.idToken,
    //       +resData.expiresIn
    //     );
    //   })
    // );
  }

  login(email: string, password: string) {
    return this.http
      .post(
        `${environment.apiUrl}/${this.url}/login`,
        {
          email: email,
          password: password,
        },
        {
          responseType: 'text',
        }
      )
      .pipe(
        tap((authToken) => {
          localStorage.setItem("authToken", authToken);
          this.token.next(authToken)
        })
      );
  }

  autoLogin() {
    const authToken: string = localStorage.getItem('authToken');

    if (!authToken) {
      return;
    }

    this.token.next(authToken);
  }

  logout() {
    this.token.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('authToken');
  }

  getAccountInfo(): Observable<User> {  // uses token
    return this.http.get<User>(`${environment.apiUrl}/${this.url}/account`);
  }
}
