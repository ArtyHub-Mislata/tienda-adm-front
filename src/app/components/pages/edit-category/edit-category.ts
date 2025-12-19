import { Component } from '@angular/core';
import { CategoryModel } from '../../../models/CategoryModel';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http-service';
import { FormsModule } from '@angular/forms';
import { CButton } from '../../ui/c-button/c-button';

@Component({
  selector: 'app-edit-category',
  imports: [FormsModule, RouterLink, CButton],
  templateUrl: './edit-category.html',
  styleUrl: './edit-category.scss',
})
export class EditCategory {
  category!: CategoryModel;
  
  constructor(private route: ActivatedRoute, private httpService: HttpService,private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id')!
        if(id){
          this.loadCategory(id)
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
  save(){
    this.httpService.putCategory(this.category).subscribe({
      next: (artwork) => {
        console.log(artwork)
        this.router.navigate(['/categories'])
      },
      error: (error) => {
        this.router.navigate(['/categories'])
        console.log(error)
      }
    })
  }
}
