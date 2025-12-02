import { Component } from '@angular/core';
import { CardArtwork } from '../card-artwork/card-artwork';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http-service';
import { ArtWorkModel } from '../../../models/ArtWorkModel';

@Component({
  selector: 'app-delete-artwork',
  imports: [CardArtwork, RouterLink],
  templateUrl: './delete-artwork.html',
  styleUrl: './delete-artwork.scss',
})
export class DeleteArtwork {
  artwork !: ArtWorkModel;

  constructor(private route: ActivatedRoute, private httpService: HttpService){}
  
  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id')
        if(id){
          this.loadArtwork(id);
        }
      } 
    )
  }
  loadArtwork(id:string){
    this.httpService.getArtWorkById(id).subscribe({
      next: (artwork) => {
        this.artwork = artwork
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }
  deleteArtwork(){
    this.httpService.deleteArtwork(this.artwork.id).subscribe({
      next: ()=> {
        console.log("ARTWORK ELIMINADO CON EXITO")
      }, 
      error: (error) => {
        console.log("Error eliminadno artwork", error)
      }
    })
  }
}
