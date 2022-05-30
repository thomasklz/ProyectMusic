import { Component } from '@angular/core';

import { DeezerService } from './servicios/musica/deezer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
generos:any;
constructor(private deezerService:DeezerService) {}

ngOnInit(): void {
  this.getGener();
}

getGener(){
  this.deezerService.getGenero().subscribe({
    next: (d) =>{
     this.generos=d.data;
    },
    error: (e) => {
      debugger
    }
  })
}

}
