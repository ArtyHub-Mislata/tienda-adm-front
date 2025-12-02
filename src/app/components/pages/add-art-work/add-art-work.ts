import { Component } from '@angular/core';
import { ArtWorkModel } from '../../../models/ArtWorkModel';

@Component({
  selector: 'app-add-art-work',
  imports: [],
  templateUrl: './add-art-work.html',
  styleUrl: './add-art-work.scss',
})
export class AddArtWork {
  artwork: ArtWorkModel ={
    id: '',
    nombre: '',
    description: '',
    imgUrl: '',
    price: 0,
    stock: 0,
    category: {
      id: '',
      nombre: ''
    }
  }
  
}
