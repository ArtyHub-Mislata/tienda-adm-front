import { Component } from '@angular/core';
import { UserModel } from '../../../models/UserModel';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http-service';

@Component({
  selector: 'app-delete-user',
  imports: [RouterLink],
  templateUrl: './delete-user.html',
  styleUrl: './delete-user.scss',
})
export class DeleteUser {
  user!: UserModel;
  artworks!: ArtWorkModel[]
  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router){}

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
  borrarArtwork(id: number | undefined){
    if(id){
      this.httpService.deleteArtwork(id.toString()).subscribe({
        next: () => {
          this.router.navigate([`/users/${this.user.id}/delete`])
        }, 
        error: (error) => {
          console.log(error)
          this.router.navigate([`/users/${this.user.id}/delete`])
        }
      })
    }
  }
  eliminarUsuario(){
    if(this.user){
      this.httpService.deleteUser(this.user!.id!.toString()).subscribe({
          next: () => {
            console.log("USUARIO BORRADO")
            this.router.navigate(['/users'])
          }, 
          error: (error) => {
            console.log(error)
            this.router.navigate(['/users'])
          }
      })
    }
  }
  

}
