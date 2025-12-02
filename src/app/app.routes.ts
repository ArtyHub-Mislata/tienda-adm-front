import { Routes } from '@angular/router';
import { ArtworkPage } from './components/pages/artwork-page/artwork-page';
import { ArtworkListPage } from './components/pages/artwork-list-page/artwork-list-page';
import { UserPage } from './components/pages/user-page/user-page';
import { UserListPage } from './components/pages/user-list-page/user-list-page';
import { DeleteUser } from './components/pages/delete-user/delete-user';
import { ModifyUser } from './components/pages/modify-user/modify-user';
import { AddUser } from './components/pages/add-user/add-user';
import { DeleteArtwork } from './components/pages/delete-artwork/delete-artwork';
import { ModifyArtwork } from './components/pages/modify-artwork/modify-artwork';
import { AddArtWork } from './components/pages/add-art-work/add-art-work';

export const routes: Routes = [
    //TODO Hay que hacer rutas hijas pa que no salga el header en el login
    {path:"", component: AddUser},
    {path: "artworks", component: ArtworkListPage}, 
    {path: "artworks/new", component: AddArtWork}, 
    {path: "artworks/:id", component: ArtworkPage}, 
    {path: "artworks/:id/delete", component: DeleteArtwork}, 
    {path: "artworks/:id/edit", component: ModifyArtwork}, 
    
    {path: "users", component: UserListPage}, 
    {path: "users/:id", component: UserPage}, 
    {path: "users/:id/delete", component: DeleteUser}, 
    {path: "users/:id/edit", component: ModifyUser},  
    {path: "users/new", component: AddUser}, 
    
];
