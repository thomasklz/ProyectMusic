import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private httpClient:HttpClient) { }

  apiURL="https://api.deezer.com/"; 

  getMusicaForArtist(nombre:string){
    return this.httpClient.get<any>(this.apiURL+"search?q="+nombre);
  }

  getGenero(){
    return this.httpClient.get<any>(this.apiURL+"genre");
  }

  getAlbumForArtist(idArtista:number){
    return this.httpClient.get<any>(this.apiURL+"artist/"+idArtista+"/albums");
  }
  getTrackAlbum(idalbum:number){
  
    return this.httpClient.get<any>(this.apiURL+"album/"+idalbum+"/tracks");
  }
}
