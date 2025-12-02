import { Component } from '@angular/core';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http-service';
import { CardArtwork } from "../card-artwork/card-artwork";

@Component({
  selector: 'app-artwork-page',
  imports: [CardArtwork, RouterLink],
  templateUrl: './artwork-page.html',
  styleUrl: './artwork-page.scss',
})
export class ArtworkPage {
  artwork!: ArtWorkModel;
  constructor(private route: ActivatedRoute, private httpService: HttpService){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id')
        if(id){
          this.loadArtwork(id)
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
  mostrar(){
    console.log(this.artwork)
  }

}
