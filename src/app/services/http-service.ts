import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtWorkModel } from '../models/ArtWorkModel';
import { UserModel } from '../models/UserModel';
import { CategoryModel } from '../models/CategoryModel';
import { PageResponse } from '../models/PageResponseModel';
import { CredentialModel } from '../models/CredentialModel';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  //TODO la url y puerto deberian estar en un archivo config
  private url = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient){}

  //CRUD ARTWORKS
  
  getArtworksByCategoryId(id:string): Observable<PageResponse<ArtWorkModel>> {
    return this.httpClient.get<PageResponse<ArtWorkModel>>(`${this.url}/categories/${id}/artworks`)
  }

  getAllArtworks(): Observable<PageResponse<ArtWorkModel>>{
    console.log()
    return this.httpClient.get<PageResponse<ArtWorkModel>>(`${this.url}/artworks`)
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
    return this.httpClient.get<PageResponse<UserModel>>(`${this.url}/admin/users`)
  }
  getAllArtworksOfUser(id:string): Observable<PageResponse<ArtWorkModel>>{
    return this.httpClient.get<PageResponse<ArtWorkModel>>(`${this.url}/admin/users/${id}/artworks`)
  }
  
  getUserById(id:string):Observable<UserModel>{
    return this.httpClient.get<UserModel>(`${this.url}/admin/users/${id}`)
  }
  putUser(artwork: UserModel):Observable<UserModel>{
    return this.httpClient.put<UserModel>(`${this.url}/admin/users/${artwork.id}`, artwork)
  }
  postUser(artwork: UserModel):Observable<UserModel>{
    return this.httpClient.post<UserModel>(`${this.url}/admin/users`, artwork)
  }
  deleteUser(id: string):Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/admin/users/${id}`)
  }

  //CRUD CATEGORIAS

  getAllCategories(): Observable<PageResponse<CategoryModel>>{
    return this.httpClient.get<PageResponse<CategoryModel>>(`${this.url}/categories`)
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

  login(credential: CredentialModel): Observable<{ token: string }> {
    return this.httpClient.post<{ token: string }>(`${this.url}/users/login`, credential);
  }

  logout():Observable<void> {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    return this.httpClient.delete<void>(`${this.url}/users/logout`);
  }

  isLogged(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return this.httpClient.get<boolean>(`${this.url}/users/isLogged?token=${token}`);
  }

}
