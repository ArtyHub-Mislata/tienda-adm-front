import { Component } from '@angular/core';
import { HttpService } from '../../../services/http-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CredentialModel } from '../../../models/CredentialModel';
import { CButton } from '../../ui/c-button/c-button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login-page',
  imports: [FormsModule, CButton, RouterLink],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss'],
})
export class LoginPage {
  
  credential: CredentialModel = {
    email: '',
    password: ''
  };

  constructor( private authService: HttpService, private router: Router ){}

  onLogin() {
    this.authService.login(this.credential).subscribe({
      next: (resp) => {
        localStorage.setItem('token', resp.token);
        this.router.navigate(['/']);
        this.authService.btnIsLogged.next(true)
      },
      error: (error) => {
        this.authService.btnIsLogged.next(false)
        console.log(error);
      }
    })
  }
}