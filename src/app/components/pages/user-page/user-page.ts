import { Component } from '@angular/core';
import { UserModel } from '../../../models/UserModel';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http-service';
import { ArtWorkModel } from '../../../models/ArtWorkModel';

@Component({
  selector: 'app-user-page',
  imports: [RouterLink],
  templateUrl: './user-page.html',
  styleUrl: './user-page.scss',
})
export class UserPage {
  user!: UserModel;
  artworks!: ArtWorkModel[]
  constructor(private route: ActivatedRoute, private httpService: HttpService){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id')!
        if(id){
          this.loadUser(id)
          this.loadArtworksOfUser(id)
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
  loadArtworksOfUser(id:string){
    this.httpService.getAllArtworksOfUser(id).subscribe({
      next: (artworkPage) => {
        this.artworks = artworkPage.data
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }
}
