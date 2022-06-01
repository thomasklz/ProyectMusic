import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FromreactiveComponent } from './page/fromreactive/fromreactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './page/card/card.component';
 

@NgModule({
  declarations: [
    AppComponent,
    FromreactiveComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
