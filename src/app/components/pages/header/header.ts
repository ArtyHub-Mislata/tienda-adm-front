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
  isLogged = false;
  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.checkIsLogged();
  }

  logOut(){
    this.httpService.logout().subscribe({
      next : () =>{
        console.log("Sesion cerrada con éxito")
        this.isLogged = false;
      }, 
      error: (error) => { 
        console.log("Error al cerrar sesión", error)
      }
    })
  }

  checkIsLogged(){
    this.httpService.isLogged().subscribe({
      next : () =>{
        console.log("Sesion iniciada con éxito")
        this.isLogged = true;
      }, 
      error: (error) => { 
        console.log("Error al iniciar sesión", error)
      }
    })
  }
}
