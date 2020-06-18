import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import {FormsModule} from '@angular/forms';
import {CustomSummaryPipe} from './pipes/customSummary.pipe';
import {AutoreComponent} from './autore/autore.component';
import { InputFormatDirective } from './directives/input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    CustomSummaryPipe,
    AutoreComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
