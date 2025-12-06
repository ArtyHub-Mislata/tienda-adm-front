import { Component } from '@angular/core';
import { CategoryModel } from '../../../models/CategoryModel';
import { HttpService } from '../../../services/http-service';
import { ActivatedRoute, RouterLink  } from '@angular/router';
import { CardCategory } from '../card-category/card-category';

@Component({
  selector: 'app-category-page',
  imports: [RouterLink, CardCategory],
  templateUrl: './category-page.html',
  styleUrl: './category-page.scss',
})
export class CategoryPage {
  category!: CategoryModel;

  constructor(private route: ActivatedRoute, private httpService: HttpService){}
  
  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id')
        if(id){
          this.loadCategory(id)
        }
      }
    )
  }

  loadCategory(id:string){
    this.httpService.getCategoryById(id).subscribe({
      next: (category) => {
        this.category = category
      }, 
      error: (error) => {
        console.log(error)
      }
    })
  }
}
