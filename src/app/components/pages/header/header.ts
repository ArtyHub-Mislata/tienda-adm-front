import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'c-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isLogged: boolean = false;
  

  constructor(private httpService: HttpService) {
    
  }
  ngOnInit(){
    this.httpService.isLogged$.subscribe({
      next: (isLogged) =>{
        this.isLogged = isLogged;
      }
    })
  }
  logOut(){
    this.httpService.logout().subscribe({
      next: () => {
        console.log("SESION CERRADA CON ÉXITO")
        localStorage.removeItem("token")
        this.httpService.btnIsLogged.next(true)
      }, 
      error: (err) =>{
        console.log("HAY UN ERROR EN EL LOGOUT" ,err)
      }

    })
  }

  
  
}
