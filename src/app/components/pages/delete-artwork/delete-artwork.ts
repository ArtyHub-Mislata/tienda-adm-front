import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { HttpService } from '../../../services/http-service';
import { CButton } from '../../ui/c-button/c-button';

@Component({
  selector: 'app-delete-artwork',
  imports: [RouterLink, CButton],
  templateUrl: './delete-artwork.html',
  styleUrl: './delete-artwork.scss',
})
export class DeleteArtwork {
  artwork!: ArtWorkModel;
  private id!: string;
  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        this.id = paramMap.get('id')!
        
      }
      
    )
    this.httpService.getArtWorkById(this.id).subscribe({
      next: (artwork) => {
        this.artwork = artwork
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }

  delete(){
    this.httpService.deleteArtwork(this.id).subscribe({
      next: () => {
        console.log("ELEMENTO BORRADO")
        this.router.navigate(['/artworks'])
      }, 
      error: (error) => {
        console.log(error)
        this.router.navigate(['/artworks'])
      }
    })
  }
}
