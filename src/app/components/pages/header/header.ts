import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http-service';

@Component({
  selector: 'c-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private httpService: HttpService){}

  //TODO habría que hacer un login service que gestionara el login y el logout
  logOut(){
    this.httpService.logout().subscribe({
      next : () =>{
        console.log("Sesion cerrada con éxito")
      }, 
      error: (error) => { 
        console.log("Error al cerrar sesión", error)
      }
    })
  }
}
