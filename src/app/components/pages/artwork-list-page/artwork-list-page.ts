import { Component } from '@angular/core';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { HttpService } from '../../../services/http-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-artwork-list-page',
  imports: [RouterLink],
  templateUrl: './artwork-list-page.html',
  styleUrl: './artwork-list-page.scss',
})
export class ArtworkListPage {
  artworkList!: ArtWorkModel[]

  constructor(private httpService: HttpService){

  }
  //TODO la gestion de errores esta es pauperrima, hay q mejorarla
  ngOnInit(){
    this.getAllArtWorks()
  }
  
  getAllArtWorks(){
    this.httpService.getAllArtworks().subscribe({
      next: (artworks) => {
        this.artworkList = artworks;
      }, 
      error: (error) => {
        console.log("Error al tratar de recoger todos los artworks", error)
      }
    })  
  }
}
