import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// Componentes
import { SneakersComponent } from './sneakers/sneakers.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SneakersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
