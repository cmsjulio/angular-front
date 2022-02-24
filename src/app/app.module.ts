import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolaListComponent } from './escola-list/escola-list.component';
import { EscolaCreateComponent } from './escola-create/escola-create.component';
import { FormsModule } from '@angular/forms';
import { EscolaUpdateComponent } from './escola-update/escola-update.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolaListComponent,
    EscolaCreateComponent,
    EscolaUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
