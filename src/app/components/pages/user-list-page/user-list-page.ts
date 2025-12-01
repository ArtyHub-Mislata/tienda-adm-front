import { Component } from '@angular/core';
import { HttpService } from '../../../services/http-service';
import { UserModel } from '../../../models/UserModel';
@Component({
  selector: 'app-user-list-page',
  imports: [],
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
        this.usermodelList = users;
      }, 
      error: (error) => {
        console.log("Error al tratar de recoger todos los usuarios", error)
      }
    })  
  }
}
