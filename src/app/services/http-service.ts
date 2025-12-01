import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtWorkModel } from '../models/ArtWorkModel';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = "http://localhost:3106"

  constructor(private httpClient: HttpClient){}

  getAllArtworks(): Observable<ArtWorkModel[]>{
    return this.httpClient.get<ArtWorkModel[]>(`${this.url}/artworks`)
  }
  
  getById(id:string):Observable<ArtWorkModel>{
    return this.httpClient.get<ArtWorkModel>(`${this.url}/artworks/${id}`)
  }
}
