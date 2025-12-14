import { Component } from '@angular/core';
import { CategoryModel } from '../../../models/CategoryModel';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http-service';
import { ArtWorkModel } from '../../../models/ArtWorkModel';

@Component({
  selector: 'app-delete-category',
  imports: [RouterLink],
  templateUrl: './delete-category.html',
  styleUrl: './delete-category.scss',
})
export class DeleteCategory {
  category!: CategoryModel;
  artworks!: ArtWorkModel[]
  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id')!
        if(id){
          this.loadCategory(id)
          this.loadArtworksByCategory(id)
        }
      }
      
    )
    
  }
  loadCategory(id: string){
    this.httpService.getCategoryId(id).subscribe({
      next: (category) => {
        this.category = category
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }
  loadArtworksByCategory(id: string){
    this.httpService.getArtworksByCategoryId(id).subscribe({
      next: (artworks) => {
        this.artworks = artworks.data
      }, 
      error: (error) => {
        console.log(error)
        
      }
    })
  }
  deleteCategory(){
    if(this.category.id){
      this.httpService.deleteCategory(this.category.id.toString()).subscribe({
        next: () => {
          console.log("ELEMENTO BORRADO")
          this.router.navigate(["/categories"])
        }, 
        error: (error) => {
          console.log(error)
          this.router.navigate(["/categories"])
        }
      })
    }
  }
  deleteArtWork(id: number | undefined){
    if(id){
      this.httpService.deleteArtwork(id.toString()).subscribe({
        next: () => {
          this.router.navigate([`/categories/${this.category.id}/delete`])
        }, 
        error: (error) => {
          console.log(error)
          this.router.navigate([`/categories/${this.category.id}/delete`])
        }
      })
    }
  }   
}
