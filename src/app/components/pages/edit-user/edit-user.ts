import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { CategoryModel } from '../../../models/CategoryModel';
import { HttpService } from '../../../services/http-service';
import { UserModel } from '../../../models/UserModel';

@Component({
  selector: 'app-edit-user',
  imports: [FormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.scss',
})
export class EditUser {
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
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }
  save(){
    this.httpService.putUser(this.user).subscribe({
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
