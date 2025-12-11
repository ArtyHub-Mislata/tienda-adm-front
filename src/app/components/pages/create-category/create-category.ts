import { Component } from '@angular/core';
import { CategoryModel } from '../../../models/CategoryModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  imports: [FormsModule],
  templateUrl: './create-category.html',
  styleUrl: './create-category.scss',
})
export class CreateCategory {
  category!: CategoryModel;
}
