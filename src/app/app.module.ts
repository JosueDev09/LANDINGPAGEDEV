import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import {  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoPasteDirectiveDirective } from './no-paste-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NoPasteDirectiveDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
