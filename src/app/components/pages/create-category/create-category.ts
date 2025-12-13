import { Component } from '@angular/core';
import { CategoryModel } from '../../../models/CategoryModel';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { HttpService } from '../../../services/http-service';

@Component({
  selector: 'app-create-category',
  imports: [FormsModule, RouterLink],
  templateUrl: './create-category.html',
  styleUrl: './create-category.scss',
})
export class CreateCategory {
  category: CategoryModel = {
    name : ''
  }
  constructor(private httpService: HttpService,private router: Router){}

  save(){
    this.httpService.postCategory(this.category).subscribe({
      next: (category) =>{
        console.log("Categoria creada con exito: " + category)
        this.router.navigate(['/categories'])
      }, 
      error: (error) => {
        console.log("Error al crear la categoría", error)
        this.router.navigate(['/categories'])
      }
    })
  }
}
