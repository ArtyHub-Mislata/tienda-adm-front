import { Routes } from '@angular/router';
import { ArtworkPage } from './components/pages/artwork-page/artwork-page';
import { ArtworkListPage } from './components/pages/artwork-list-page/artwork-list-page';
import { UserPage } from './components/pages/user-page/user-page';
import { UserListPage } from './components/pages/user-list-page/user-list-page';
import { DeleteArtwork } from './components/pages/delete-artwork/delete-artwork';
import { EditArtwork } from './components/pages/edit-artwork/edit-artwork';

export const routes: Routes = [

    {path: "artworks", component: ArtworkListPage},
    {path: "artworks/:id", component: ArtworkPage}, 
    {path: "artworks/:id/delete", component: DeleteArtwork}, 
    {path: "artworks/:id/edit", component: EditArtwork}, 




    {path: "users/:id", component: UserPage}, 
    {path: "users", component: UserListPage}, 

];
