import { Component } from '@angular/core';
import { CategoryModel } from '../../../models/CategoryModel';
import { HttpService } from '../../../services/http-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-category-list-page',
  imports: [RouterLink],
  templateUrl: './category-list-page.html',
  styleUrl: './category-list-page.scss',
})
export class CategoryListPage {
  categoryList!: CategoryModel[]

  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.getAllCategories()
  }

  getAllCategories() {
    this.httpService.getAllCategories().subscribe({
      next: (categories) => {
        this.categoryList = categories;
      },
      error: (error) => {
        console.log("Error al tratar de recoger todas las categorias", error)
      }
    })
  }

}
