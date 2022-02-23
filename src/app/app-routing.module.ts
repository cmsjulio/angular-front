import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaListComponent } from './escola-list/escola-list.component';

const routes: Routes = [
  {path: 'escolas', component: EscolaListComponent},
  {path: '', redirectTo: 'escolas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
