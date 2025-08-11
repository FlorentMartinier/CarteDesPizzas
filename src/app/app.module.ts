import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';
import { ToggleableSectionComponent } from './components/toggleable-section/toggleable-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaCardComponent,
    ToggleableSectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LogoComponent,
    BrowserAnimationsModule,
    CommonModule,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
