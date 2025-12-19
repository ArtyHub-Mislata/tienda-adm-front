import { Component } from '@angular/core';
import { CategoryModel } from '../../../models/CategoryModel';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpService } from '../../../services/http-service';
import { CButton } from '../../ui/c-button/c-button';

@Component({
  selector: 'app-category-list-page',
  imports: [RouterLink, CButton],
  templateUrl: './category-list-page.html',
  styleUrl: './category-list-page.scss',
})
export class CategoryListPage {
  categories!: CategoryModel[];
  constructor(private route: ActivatedRoute, private httpService: HttpService, private router :Router){}

  ngOnInit(){
    this.loadCategories();
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
}
