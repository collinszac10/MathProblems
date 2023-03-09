import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PrimeNGConfig } from 'primeng/api';
import { MathOptionsComponent } from './math-options/math-options.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CorePrimengModule } from './core-primeng/core-primeng.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CorePrimengModule,
    FormsModule,
  ],
  declarations: [AppComponent, MathOptionsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private primeNGConfig: PrimeNGConfig) {
    this.primeNGConfig.ripple = true;
  }
}
