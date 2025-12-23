import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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

  constructor(private httpService: HttpService, private router: Router, private cd: ChangeDetectorRef) {
    
  }
  ngOnInit(){
    this.httpService.isLogged$.subscribe({
      next: (isLogged) =>{
        this.isLogged = isLogged;
        this.cd.detectChanges();
      }
    })
  }
  logOut(){
    this.httpService.logout().subscribe({
      next: () => {
        console.log("SESION CERRADA CON ÉXITO")
        this.router.navigate(['/login'])
      }, 
      error: (err) =>{
        console.log("HAY UN ERROR EN EL LOGOUT" ,err)
      }

    })
  }

  
  
}
