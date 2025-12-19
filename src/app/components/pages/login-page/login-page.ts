import { Component } from '@angular/core';
import { HttpService } from '../../../services/http-service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
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

  generalError: string = '';

  constructor( private authService: HttpService, private router: Router ){}

  onLogin(form: NgForm) {
    this.generalError = '';

    if(form.invalid) return;

    this.authService.login(this.credential).subscribe({
      next: (resp) => {
        localStorage.setItem('token', resp.token);
        this.router.navigate(['/']);
        this.authService.btnIsLogged.next(true)
      },
      error: (error) => {
        this.authService.btnIsLogged.next(false)
        this.generalError = 'Error al iniciar sesión';
        console.log('Error no controlado: ', error);
      }
    });
  }
}
