import { Component, Input } from '@angular/core';
import { CategoryModel } from '../../../models/CategoryModel';

@Component({
  selector: 'card-category',
  imports: [],
  templateUrl: './card-category.html',
  styleUrl: './card-category.scss',
})
export class CardCategory {
  @Input() category!: CategoryModel;
}
