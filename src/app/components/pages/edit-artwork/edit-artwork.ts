import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { HttpService } from '../../../services/http-service';
import { CategoryModel } from '../../../models/CategoryModel';
import { CButton } from '../../ui/c-button/c-button';

@Component({
  selector: 'app-edit-artwork',
  imports: [FormsModule, CButton, RouterLink],
  templateUrl: './edit-artwork.html',
  styleUrl: './edit-artwork.scss',
})
export class EditArtwork {
  artwork!: ArtWorkModel;
  categories!: CategoryModel[];
  constructor(private route: ActivatedRoute, private httpService: HttpService, private router :Router){}

  ngOnInit(){
    this.loadCategories()
    this.route.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id')!
        if(id){
          this.loadArtwork(id)
        }
      }
      
    )
    
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
  loadArtwork(id: string){
    this.httpService.getArtWorkById(id).subscribe({
      next: (artwork) => {
        this.artwork = artwork
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }
  save(){
    this.httpService.putArtWork(this.artwork).subscribe({
      next: (artwork) => {
        console.log(artwork)
        this.router.navigate(['artworks'])
      },
      error: (error) => {
        this.router.navigate(['artworks'])
        console.log(error)
      }
    })
  }
}
