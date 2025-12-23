import { Component } from '@angular/core';
import { UserModel } from '../../../models/UserModel';
import { HttpService } from '../../../services/http-service';
import { PageResponse } from '../../../models/PageResponseModel';
import { ArtWorkModel } from '../../../models/ArtWorkModel';
import { CategoryModel } from '../../../models/CategoryModel';
import { filter, forkJoin, switchMap } from 'rxjs';

@Component({
  selector: 'app-initial-page',
  imports: [],
  templateUrl: './initial-page.html',
  styleUrl: './initial-page.scss',
})
export class InitialPage {
    user?: UserModel;
    totalArtworks: number = 0;
    totalUsers: number = 0;
    totalCategories: number = 0;

    constructor(private httpService: HttpService) {}
    
    ngOnInit(): void {
        this.httpService.isLogged().subscribe({
            next: (user) => {
                if (!user) return;

                forkJoin({
                    user: this.httpService.getUser(),
                    artworks: this.httpService.getAllArtworks(),
                    users: this.httpService.getAllUsers(),
                    categories: this.httpService.getAllCategories()
                }).subscribe(({ user, artworks, users, categories }) => {
                    this.user = user;
                    this.totalArtworks = artworks.totalElements;
                    this.totalUsers = users.totalElements;
                    this.totalCategories = categories.totalElements;
                });
            },
            error: err => console.error('Error al comprobar login:', err)
        });
    }
}
