import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  getMoviesForName(name:string){
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=43bb95cae941badc90476b9f10f04134&language=es-Es&query=${name}&page=1&include_adult=false`);
  }

  

}
