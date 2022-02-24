import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaCreateComponent } from './escola-create/escola-create.component';
import { EscolaListComponent } from './escola-list/escola-list.component';
import { EscolaUpdateComponent } from './escola-update/escola-update.component';

const routes: Routes = [
  {path: 'escolas', component: EscolaListComponent},
  {path: 'escola-create', component: EscolaCreateComponent},
  {path: '', redirectTo: 'escolas', pathMatch: 'full'},
  {path: 'escola-update/:id', component: EscolaUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
