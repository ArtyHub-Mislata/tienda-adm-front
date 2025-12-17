import { Component } from '@angular/core';
import { HttpService } from '../../../services/http-service';
import { UserModel } from '../../../models/UserModel';
import { RouterLink } from "@angular/router";
import { CButton } from '../../ui/c-button/c-button';
@Component({
  selector: 'app-user-list-page',
  imports: [RouterLink, CButton],
  templateUrl: './user-list-page.html',
  styleUrl: './user-list-page.scss',
})
export class UserListPage {
  usermodelList!: UserModel[]

  constructor(private httpService: HttpService){

  }
  //TODO la gestion de errores esta es pauperrima, hay q mejorarla
  ngOnInit(){
    this.getAllUsers()
  }
  
  getAllUsers(){
    this.httpService.getAllUsers().subscribe({
      next: (users) => {
        this.usermodelList = users.data;
      }, 
      error: (error) => {
        console.log("Error al tratar de recoger todos los usuarios", error)
      }
    })  
  }
}
