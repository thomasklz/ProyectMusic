import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeezerService } from './../../servicios/musica/deezer.service';

@Component({
  selector: 'app-fromreactive',
  templateUrl: './fromreactive.component.html',
  styleUrls: ['./fromreactive.component.css']
})
export class FromreactiveComponent implements OnInit {
  frmPersona:any;
  musicas:any;
  album:any;
  track:any;
  arryNuevoALbum:any=[];
  constructor(private deezerService:DeezerService) { }

  ngOnInit(): void {
    this.searchMusic("Don omar");
  }

  searchMusic(nombre:any){
    let d;
    if(nombre.value){
      d=nombre.value;
    }else{
      d=nombre;
    }
   this.deezerService.getMusicaForArtist(d).subscribe({
    next: (s) =>{
      this.musicas=s.data;
     this.getAlbumforartist(this.musicas[0].artist.id);
      this.cargarAlbum();
    },
    error: (e)=>{
    },
   })
  }

cargarAlbum(){
this.arryNuevoALbum.length=0;

  for (let musica of this.musicas) {

    this.arryNuevoALbum.push(musica.album.title);

  }
 
}
  getAlbumforartist(idartista:number){
    this.deezerService.getAlbumForArtist(idartista).subscribe({
      next: (s) =>{
       this.album=s.data;
      },
      error: (e)=>{
        
      },

    })
  }
 

  getTrack(id:number){
    this.deezerService.getTrackAlbum(id).subscribe({
      next: (s) =>{
       this.track=s.data;
       },
       error: (e)=>{
         debugger
       },
    })
  }
}
