import { Component } from '@angular/core';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../services/http-service';

@Component({
  selector: 'app-artwork-page',
  imports: [],
  templateUrl: './artwork-page.html',
  styleUrl: './artwork-page.scss',
})
export class ArtworkPage {
  artwork!: ArtWorkModel;
  private id!: string;
  constructor(private route: ActivatedRoute, private httpService: HttpService){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        this.id = paramMap.get('id')!
        console.log("Aqui ha llegado")
      }
      
    )
    this.httpService.getById(this.id).subscribe({
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
