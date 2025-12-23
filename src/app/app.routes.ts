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
import { logInGuardGuard } from './guards/log-in-guard-guard';
import { LoginPage } from './components/pages/login-page/login-page';
import { InitialPage } from './components/pages/initial-page/initial-page';
import { LogoutPage } from './components/pages/logout-page/logout-page';
import { ProfilePage } from './components/pages/profile-page/profile-page';

export const routes: Routes = [

    {path: "", component: InitialPage},

    {path: "artworks", component: ArtworkListPage, canActivate: [logInGuardGuard]},
    {path: "artworks/:id", component: ArtworkPage, canActivate: [logInGuardGuard]}, 
    {path: "artworks/:id/delete", component: DeleteArtwork, canActivate: [logInGuardGuard]}, 
    {path: "artworks/:id/edit", component: EditArtwork, canActivate: [logInGuardGuard]}, 
    {path: "artworks/new/:id", component: CreateArtwork, canActivate: [logInGuardGuard]}, 

    {path: "users/new", component: CreateUser, canActivate: [logInGuardGuard]}, 
    {path: "users/:id/edit", component: EditUser, canActivate: [logInGuardGuard]},
    {path: "users/:id/delete", component: DeleteUser, canActivate: [logInGuardGuard]},  
    {path: "users/:id", component: UserPage, canActivate: [logInGuardGuard]},
    {path: "users", component: UserListPage, canActivate: [logInGuardGuard]},
    

    {path: "categories", component: CategoryListPage, canActivate: [logInGuardGuard]},
    {path: "categories/:id/edit", component: EditCategory, canActivate: [logInGuardGuard]},
    {path: "categories/:id/delete", component: DeleteCategory, canActivate: [logInGuardGuard]},
    {path: "categories/new", component: CreateCategory, canActivate: [logInGuardGuard]},

    {path:"login", component: LoginPage},
    {path:"logout", component: LogoutPage},
    {path:"profile", component: ProfilePage}
];
