import { Component } from '@angular/core';
import { CategoryModel } from '../../../models/CategoryModel';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/http-service';

@Component({
  selector: 'app-delete-category',
  imports: [],
  templateUrl: './delete-category.html',
  styleUrl: './delete-category.scss',
})
export class DeleteCategory {
  category!: CategoryModel;
  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id')!
        if(id){

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

  delete(id: string){
    this.httpService.deleteCategory(id).subscribe({
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
