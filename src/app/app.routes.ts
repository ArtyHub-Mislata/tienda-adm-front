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
import { CategoryPage } from './components/pages/category-page/category-page';
import { CategoryListPage } from './components/pages/category-list-page/category-list-page';
import { DeleteCategory } from './components/pages/delete-category/delete-category';
import { ModifyCategory } from './components/pages/modify-category/modify-category';
import { AddCategory } from './components/pages/add-category/add-category';
import { logInGuardGuard } from './guards/log-in-guard-guard';

export const routes: Routes = [
    //TODO Hay que hacer rutas hijas pa que no salga el header en el login ni en el crear cuenta
    {path:"", component: AddUser},
    {path: "artworks", component: ArtworkListPage, canActivate: [logInGuardGuard] }, 
    {path: "artworks/new", component: AddArtWork, canActivate: [logInGuardGuard] }, 
    {path: "artworks/:id", component: ArtworkPage, canActivate: [logInGuardGuard] }, 
    {path: "artworks/:id/delete", component: DeleteArtwork, canActivate: [logInGuardGuard] }, 
    {path: "artworks/:id/edit", component: ModifyArtwork, canActivate: [logInGuardGuard] }, 
    
    {path: "users", component: UserListPage, canActivate: [logInGuardGuard] }, 
    {path: "users/new", component: AddUser, canActivate: [logInGuardGuard] },
    {path: "users/:id", component: UserPage, canActivate: [logInGuardGuard] }, 
    {path: "users/:id/delete", component: DeleteUser, canActivate: [logInGuardGuard] }, 
    {path: "users/:id/edit", component: ModifyUser, canActivate: [logInGuardGuard] },  

    {path: "categories", component: CategoryListPage, canActivate: [logInGuardGuard] }, 
    {path: "categories/new", component: AddCategory, canActivate: [logInGuardGuard] },
    {path: "categories/:id", component: CategoryPage, canActivate: [logInGuardGuard] }, 
    {path: "categories/:id/delete", component: DeleteCategory, canActivate: [logInGuardGuard] }, 
    {path: "categories/:id/edit", component: ModifyCategory, canActivate: [logInGuardGuard] }
];
