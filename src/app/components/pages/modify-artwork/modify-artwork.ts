import { Component } from '@angular/core';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { HttpService } from '../../../services/http-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryModel } from '../../../models/CategoryModel';

@Component({
  selector: 'app-modify-artwork',
  imports: [FormsModule, RouterLink],
  templateUrl: './modify-artwork.html',
  styleUrl: './modify-artwork.scss',
})
export class ModifyArtwork {
  artwork!: ArtWorkModel
  categories!: CategoryModel[]
  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    
    this.route.paramMap.subscribe({
      next: (paramMap) => {
        const id = paramMap.get('id')
        if(id){
          this.loadArtWork(id);
          this.loadCategories()
        }
      }, 
      error: (error) => {
        console.log("Ha habido un error recogiendo el id de la ruta")
      }
    })
  }
  loadArtWork(id: string){
    this.httpService.getArtWorkById(id).subscribe({
      next: (artwork) => {
        this.artwork = artwork
      }, 
      error: (error) => {
        console.log("Ha habido un error cargando el artwork de la ruta")
      }
      
    })
  }
  loadCategories(){
    this.httpService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data
      }, 
      error: (error) => {
        console.log("Ha habido un error cargando las categorias")
      }
    })
  }
  save(){
    this.httpService.putArtWork(this.artwork, this.artwork.id).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['artworks'])
      }, 
      error: (error) => {
        console.log("Ha habido un error modificando el artwork")
      }
    })
  }
  
}
