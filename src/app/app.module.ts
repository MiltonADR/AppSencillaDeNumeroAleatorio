import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PruebaComponent } from './components/prueba/prueba.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  declarations: [AppComponent, PruebaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
