import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtWorkModel } from '../models/ArtWorkModel';
import { UserModel } from '../models/UserModel';
import { CategoryModel } from '../models/CategoryModel';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  //TODO la url y puerto deberian estar en un archivo config
  private url = "http://localhost:3000"

  constructor(private httpClient: HttpClient){}

  //CRUD ARTWORKS

  getAllArtworks(): Observable<ArtWorkModel[]>{
    return this.httpClient.get<ArtWorkModel[]>(`${this.url}/artworks`)
  }
  
  getArtWorkById(id:string):Observable<ArtWorkModel>{
    return this.httpClient.get<ArtWorkModel>(`${this.url}/artworks/${id}`)
  }
  putArtWork(artwork: ArtWorkModel, id: string):Observable<ArtWorkModel>{
    return this.httpClient.put<ArtWorkModel>(`${this.url}/artworks/${id}`, artwork)
  }
  //Aqui en post lo que recibimos en teoria es diferente a lo que mandamos, por lo que creo que habria que
  //crear nuevas clases modelo con el tipo de respuesta que nos mande la api
  postArtWork(artwork: ArtWorkModel):Observable<ArtWorkModel>{
    return this.httpClient.post<ArtWorkModel>(`${this.url}/artworks`, artwork)
  }
  deleteArtwork(id: string):Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/artworks/${id}`)
  }

  //CRUD USUARIOS
  
  getAllUsers(): Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(`${this.url}/users`)
  }
  
  getUserById(id:string):Observable<UserModel>{
    return this.httpClient.get<UserModel>(`${this.url}/users/${id}`)
  }
  putUser(artwork: UserModel, id: string):Observable<UserModel>{
    return this.httpClient.put<UserModel>(`${this.url}/users/${id}`, artwork)
  }
  postUser(artwork: UserModel):Observable<UserModel>{
    return this.httpClient.post<UserModel>(`${this.url}/users`, artwork)
  }
  deleteUser(id: string):Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/users/${id}`)
  }

  //CRUD CATEGORIAS
  //TODO el getAll de todos los cruds deberia devolver un Page con el objeto dentro, que es lo que pasa el backend
  getAllCategories(): Observable<CategoryModel[]>{
    return this.httpClient.get<CategoryModel[]>(`${this.url}/categories`)
  }
  
  getCategoryId(id:string):Observable<CategoryModel>{
    return this.httpClient.get<CategoryModel>(`${this.url}/categories/${id}`)
  }
  putCategory(artwork: CategoryModel, id: string):Observable<CategoryModel>{
    return this.httpClient.put<CategoryModel>(`${this.url}/categories/${id}`, artwork)
  }
  postCategory(artwork: CategoryModel):Observable<CategoryModel>{
    return this.httpClient.post<CategoryModel>(`${this.url}/categories`, artwork)
  }
  deleteCategory(id: string):Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/categories/${id}`)
  }

  

}
