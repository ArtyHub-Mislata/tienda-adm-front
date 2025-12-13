import { Component } from '@angular/core';
import { HttpService } from '../../../services/http-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CredentialModel } from '../../../models/CredentialModel';

@Component({
  selector: 'login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
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
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}