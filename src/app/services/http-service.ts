import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ArtWorkModel } from '../models/ArtWorkModel';
import { UserModel } from '../models/UserModel';
import { CategoryModel } from '../models/CategoryModel';
import { PageResponse } from '../models/PageResponseModel';
import { CredentialModel } from '../models/CredentialModel';
import { UserRequestModel } from '../models/UserRequestModel';
import { map } from 'rxjs/operators'; // ✔ (Angular <=15)

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  btnIsLogged = new BehaviorSubject<boolean>(this.hasToken());
  isLogged$ = this.btnIsLogged.asObservable();

  //TODO la url y puerto deberian estar en un archivo config
  private url = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient){}

  //CRUD ARTWORKS
  
  getArtworksByCategoryId(id:string): Observable<PageResponse<ArtWorkModel>> {
    return this.httpClient.get<PageResponse<ArtWorkModel>>(`${this.url}/categories/${id}/artworks`)
  }

  getAllArtworks(): Observable<PageResponse<ArtWorkModel>>{
    return this.httpClient.get<PageResponse<ArtWorkModel>>(`${this.url}/artworks?page=1&size=10`)
  }
  
  getArtWorkById(id:string):Observable<ArtWorkModel>{
    return this.httpClient.get<ArtWorkModel>(`${this.url}/artworks/${id}`)
  }
  putArtWork(artwork: ArtWorkModel):Observable<ArtWorkModel>{
    return this.httpClient.put<ArtWorkModel>(`${this.url}/admin/artworks/${artwork.id}`, artwork)
  }
  //Aqui en post lo que recibimos en teoria es diferente a lo que mandamos, por lo que creo que habria que
  //crear nuevas clases modelo con el tipo de respuesta que nos mande la api
  postArtWork(artwork: ArtWorkModel):Observable<ArtWorkModel>{
    return this.httpClient.post<ArtWorkModel>(`${this.url}/admin/artworks`, artwork)
  }
  deleteArtwork(id: string):Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/admin/artworks/${id}`)
  }

  //CRUD USUARIOS
  
  getAllUsers(): Observable<PageResponse<UserModel>>{
    return this.httpClient.get<PageResponse<UserModel>>(`${this.url}/admin/users?page=1&size=10`)
  }
  getAllArtworksOfUser(id:string): Observable<PageResponse<ArtWorkModel>>{
    return this.httpClient.get<PageResponse<ArtWorkModel>>(`${this.url}/admin/users/${id}/artworks`)
  }
  
  getUserById(id:string):Observable<UserModel>{
    return this.httpClient.get<UserModel>(`${this.url}/admin/users/${id}`)
  }
  putUser(user: UserRequestModel):Observable<UserModel>{
    return this.httpClient.put<UserModel>(`${this.url}/admin/users/${user.id}`, user)
  }
  postUser(user: UserRequestModel):Observable<UserModel>{
    return this.httpClient.post<UserModel>(`${this.url}/admin/users`, user)
  }
  deleteUser(id: string):Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/admin/users/${id}`)
  }

  //CRUD CATEGORIAS

  getAllCategories(): Observable<PageResponse<CategoryModel>>{
    return this.httpClient.get<PageResponse<CategoryModel>>(`${this.url}/categories?page=1&size=10`)
  }
  
  getCategoryId(id:string):Observable<CategoryModel>{
    return this.httpClient.get<CategoryModel>(`${this.url}/categories/${id}`)
  }
  putCategory(artwork: CategoryModel):Observable<CategoryModel>{
    return this.httpClient.put<CategoryModel>(`${this.url}/admin/categories/${artwork.id}`, artwork)
  }
  postCategory(artwork: CategoryModel):Observable<CategoryModel>{
    return this.httpClient.post<CategoryModel>(`${this.url}/admin/categories`, artwork)
  }
  deleteCategory(id: string):Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/admin/categories/${id}`)
  }

  //CRUD LOGIN

  login(credential: CredentialModel): Observable<{ token: string }> {
    return this.httpClient.post<{ token: string }>(`${this.url}/users/login`, credential)
    .pipe(
      map((resp) => {
        localStorage.setItem('token', resp.token);
        this.btnIsLogged.next(true);
        return resp;
      })
    );
  }

  logout():Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/users/logout`)
    .pipe(
      map(() => {
        localStorage.removeItem('token');
        this.btnIsLogged.next(false);
      })
    );
  }

  isLogged(): Observable<boolean> {
    return this.httpClient.get<UserModel | null>(`${this.url}/users/islogged`).pipe(
      map((user) => !!user)
    );
  }

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  getUser(): Observable<UserModel | undefined> {
    return this.httpClient.get<UserModel | undefined>(`${this.url}/users/islogged`);
  }

}
