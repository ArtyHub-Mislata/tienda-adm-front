import { Routes } from '@angular/router';
import { ArtworkPage } from './components/pages/artwork-page/artwork-page';
import { ArtworkListPage } from './components/pages/artwork-list-page/artwork-list-page';
import { UserPage } from './components/pages/user-page/user-page';
import { UserListPage } from './components/pages/user-list-page/user-list-page';
import { DeleteArtwork } from './components/pages/delete-artwork/delete-artwork';
import { EditArtwork } from './components/pages/edit-artwork/edit-artwork';
import { CreateArtwork } from './components/pages/create-artwork/create-artwork';
import { CreateUser } from './components/pages/create-user/create-user';
import { DeleteUser } from './components/pages/delete-user/delete-user';
import { EditUser } from './components/pages/edit-user/edit-user';
import { CategoryListPage } from './components/pages/category-list-page/category-list-page';
import { EditCategory } from './components/pages/edit-category/edit-category';
import { DeleteCategory } from './components/pages/delete-category/delete-category';
import { CreateCategory } from './components/pages/create-category/create-category';

export const routes: Routes = [

    {path: "artworks", component: ArtworkListPage},
    {path: "artworks/:id", component: ArtworkPage}, 
    {path: "artworks/:id/delete", component: DeleteArtwork}, 
    {path: "artworks/:id/edit", component: EditArtwork}, 
    {path: "artworks/new/:id", component: CreateArtwork}, 

    {path: "users/new", component: CreateUser}, 
    {path: "users/:id/edit", component: EditUser},
    {path: "users/:id/delete", component: DeleteUser},  
    {path: "users/:id", component: UserPage},
    {path: "users", component: UserListPage},
    

    {path: "categories", component: CategoryListPage},
    {path: "categories/:id/edit", component: EditCategory},
    {path: "categories/:id/delete", component: DeleteCategory},
    {path: "categories/new", component: CreateCategory}




];
