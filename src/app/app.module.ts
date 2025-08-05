import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';
import { LogoComponent } from "./components/logo/logo.component";

@NgModule({
  declarations: [
    AppComponent,
    PizzaCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LogoComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
