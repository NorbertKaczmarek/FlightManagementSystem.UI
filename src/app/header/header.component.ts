import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isAuthenticated = true;  // false
  private userSub: Subscription;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.token.subscribe((token) => {
      this.isAuthenticated = !!token;  // !token ? false : true; 
      // console.log(token)
    });
    
    this.authService.autoLogin();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }
}
