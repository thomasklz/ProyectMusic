import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromreactiveComponent } from './page/fromreactive/fromreactive.component';

const routes: Routes = [
  
{
   path:'', component: FromreactiveComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
