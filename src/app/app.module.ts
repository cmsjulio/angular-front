import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolaListComponent } from './escola-list/escola-list.component';
import { EscolaCreateComponent } from './escola-create/escola-create.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolaListComponent,
    EscolaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
