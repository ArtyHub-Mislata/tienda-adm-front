import { Component } from '@angular/core';
import { CButton } from "../../ui/c-button/c-button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-logout-page',
  imports: [CButton, RouterLink],
  templateUrl: './logout-page.html',
  styleUrl: './logout-page.scss',
})
export class LogoutPage {

}
