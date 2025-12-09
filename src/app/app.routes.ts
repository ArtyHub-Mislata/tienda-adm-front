import { Routes } from '@angular/router';
import { ArtworkPage } from './components/pages/artwork-page/artwork-page';
import { ArtworkListPage } from './components/pages/artwork-list-page/artwork-list-page';
import { UserPage } from './components/pages/user-page/user-page';
import { UserListPage } from './components/pages/user-list-page/user-list-page';

export const routes: Routes = [
    {path: "artworks/:id", component: ArtworkPage}, 
    {path: "artworks", component: ArtworkListPage}, 
    {path: "users/:id", component: UserPage}, 
    {path: "users", component: UserListPage}, 
];
