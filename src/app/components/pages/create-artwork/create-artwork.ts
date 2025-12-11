import { Component } from '@angular/core';
import { UserModel } from '../../../models/UserModel';
import { HttpService } from '../../../services/http-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { CategoryModel } from '../../../models/CategoryModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-artwork',
  imports: [RouterLink, FormsModule],
  templateUrl: './create-artwork.html',
  styleUrl: './create-artwork.scss',
})
export class CreateArtwork {
  user!: UserModel;
  categories!: CategoryModel[]
  artwork: ArtWorkModel = {
    name: '',
    description: '',
    image: '',
    price: 0,
    categoryDto: {} as CategoryModel,
    userDto: {} as UserModel
  } as ArtWorkModel;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id')!
        if(id){
          this.loadUser(id)
          this.loadCategories()
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
  loadCategories(){
    this.httpService.getAllCategories().subscribe({
      next: (categoriesPage) => {
        this.categories = categoriesPage.data
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }
  create(){
    if(this.user){
      this.artwork.userDto = this.user
      console.log(this.artwork)
      this.httpService.postArtWork(this.artwork).subscribe({
      next: (artwork) => {
        console.log(artwork + "SE HA CREADO")
      },
      error: (error) => {
        console.log(error + "NO SE HA CREADO")
      }
    })
    }
    
    this.router.navigate([`users/${this.user.id}`])
  }
}
