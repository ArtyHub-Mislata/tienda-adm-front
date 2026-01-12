import { Component } from '@angular/core';
import { CButton } from "../../ui/c-button/c-button";
import { RouterLink } from "@angular/router";
import { HttpService } from "../../../services/http-service";
import { Router } from "@angular/router";

@Component({
  selector: 'logout-page',
  imports: [CButton, RouterLink],
  templateUrl: './logout-page.html',
  styleUrl: './logout-page.scss',
})
export class LogoutPage {

  constructor( private authService: HttpService, private router: Router ){}

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log("HAY UN ERROR EN EL LOGOUT" ,err)
      }
    });
  }
}
