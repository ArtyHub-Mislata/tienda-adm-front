import { Component } from '@angular/core';
import { UserModel } from '../../../models/UserModel';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http-service';
import { CButton } from '../../ui/c-button/c-button';
import { UserRequestModel } from '../../../models/UserRequestModel';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule, RouterLink, CButton],
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss',
})
export class CreateUser {
  user: UserRequestModel = {} as UserRequestModel;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private router :Router){}


  create(){
    this.httpService.postUser(this.user).subscribe({
      next: (user)=>{
        console.log("Usuario creado con exito");
        this.router.navigate(['/users']);
      }, 
      error: (error) => {
        console.log("Error creando usuario")
        this.router.navigate(['/users']);

      }
    })
  }

}
