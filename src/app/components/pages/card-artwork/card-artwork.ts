import { Component, Input } from '@angular/core';
import { ArtWorkModel } from '../../../models/ArtWorkModel';

@Component({
  selector: 'card-artwork',
  imports: [],
  templateUrl: './card-artwork.html',
  styleUrl: './card-artwork.scss',
})
export class CardArtwork {
  @Input() artwork!: ArtWorkModel
}
