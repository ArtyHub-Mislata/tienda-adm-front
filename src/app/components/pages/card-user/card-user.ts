import { Component, Input } from '@angular/core';
import { UserModel } from '../../../models/UserModel';

@Component({
  selector: 'card-user',
  imports: [],
  templateUrl: './card-user.html',
  styleUrl: './card-user.scss',
})
export class CardUser {
  @Input() user!: UserModel
}
