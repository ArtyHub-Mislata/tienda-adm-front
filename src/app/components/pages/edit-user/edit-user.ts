import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { CategoryModel } from '../../../models/CategoryModel';
import { HttpService } from '../../../services/http-service';
import { UserModel } from '../../../models/UserModel';
import { CButton } from '../../ui/c-button/c-button';
import { UserRequestModel } from '../../../models/UserRequestModel';

@Component({
  selector: 'app-edit-user',
  imports: [FormsModule, RouterLink, CButton],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.scss',
})
export class EditUser {
  userRequest: UserRequestModel = {} as UserRequestModel;
  user!: UserModel;
  constructor(private route: ActivatedRoute, private httpService: HttpService, private router :Router){}

  ngOnInit(){
    
    this.route.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id')!
        if(id){
          this.loadUser(id)
        }
      }
      
    )
    
  }
  loadUser(id: string){
    this.httpService.getUserById(id).subscribe({
      next: (user) => {
        this.user = user
        this.loadUserRequest()
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }
  loadUserRequest(){
    this.userRequest.id = this.user.id
    this.userRequest.address = this.user.address
    this.userRequest.description = this.user.description
    this.userRequest.email = this.user.email
    this.userRequest.imageProfileUrl = this.user.imageProfileUrl
    this.userRequest.name = this.user.name
    this.userRequest.role = this.user.role
  }
  save(){
    this.httpService.putUser(this.userRequest).subscribe({
      next: (user) => {
        console.log(user + "USER MODIFICADO")
        this.router.navigate(['/users'])
      }, 
      error: (error) => {
        this.router.navigate(['/users'])
      }
    })
  }
  
}
