import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OddsConverterComponent } from './odds-converter/odds-converter.component';
import { FormsModule } from '@angular/forms'; // <-- Import the FormsModule

@NgModule({
  declarations: [
    AppComponent,
    OddsConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,OddsConverterComponent]
})
export class AppModule { }
